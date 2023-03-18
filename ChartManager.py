import altair as alt
import altair_viewer
import pandas as pd

alt.data_transformers.disable_max_rows()
altair_viewer._global_viewer._use_bundled_js = False
alt.data_transformers.enable('data_server')

class ChartManager():

    def __init__(self):
        self.df = None
        self.Chart = None
        self.ThailandProvincesTopo = alt.topo_feature('https://raw.githubusercontent.com/cvibhagool/thailand-map/master/thailand-provinces.topojson', 'province')
        self.obj_columns = []
        self.int_columns = []
    
    def setDataframe(self,dataframe):
        self.df = dataframe
        self.obj_columns = self.df.select_dtypes(include=['object']).columns.to_list()
        self.int_columns = self.df.select_dtypes(include=['int']).columns.to_list()
    
    def ColorSchema(self,dataframe,Measurement,Color:list):
        color = alt.Color(Measurement,
                          type= "quantitative",
                          scale = alt.Scale(
                            domain = [0,dataframe[Measurement].mean(),dataframe[Measurement].max()],
                            range = Color,
                            type = "linear")
                        )
        return color
    
    def Tooltip(self,ColumnNames:list):
        l = []
        for col in ColumnNames:
            t = "quantitative" if col in self.int_columns else "nominal"
            l.append(alt.Tooltip(col, type= t))
        return l

    def SumDuplicateValue(self):
        l = []
        for y in list(set(self.df['year'])):
            maxweeknum = self.df.loc[self.df['year'] == y]['weeknum'].max()
            l.append(self.df.loc[(self.df['weeknum'] == maxweeknum) & (self.df['year'] == y)])
        df = pd.concat(l, ignore_index=True)
        group = df.groupby('province').transform('sum')
        df['total_case'] = group['total_case']
        df['total_death'] = group['total_death']
        df = df.drop_duplicates(subset=['province'])
        return df
    
    def dropAllandNone(self,df):
        dff = df
        dff.drop(index=dff[dff["province"].isin(["All","None"])].index, inplace=True)
        return dff

    def SetDatetime(self):
        
        self.df['date'] = pd.to_datetime(
                            self.df['year'].astype(str) + '-W' + self.df['weeknum'].astype(str) + '-0',
                            format='%G-W%V-%w')
        self.df = self.df.sort_values(by=['date']).loc[self.df["province"]=="All"].reset_index(drop=True)
        
    def SumTotalCD(self):
        self.df['allcase'] = 0
        self.df['alldeath'] = 0
        for index, row in self.df.iterrows():
            if index == 0:
                self.df.loc[index,'allcase'] = row['total_case']
                casenextvalue = self.df.loc[index,'allcase']
                self.df.loc[index,'alldeath'] = row['total_death']
                deathnextvalue = self.df.loc[index,'alldeath']
            elif index == self.df.shape[0] -1:
                self.df.loc[index,'allcase'] = casenextvalue + row['new_case']
                self.df.loc[index,'alldeath'] = deathnextvalue + row['new_death']
            else:
                self.df.loc[index,'allcase'] = casenextvalue + row['new_case']
                casenextvalue = self.df.loc[index,'allcase']
                self.df.loc[index,'alldeath'] = deathnextvalue + row['new_death']
                deathnextvalue = self.df.loc[index,'alldeath']

    
    def ThailandTopoChart(self,Width,Height):
        df = self.SumDuplicateValue()
        df = self.dropAllandNone(df)
        self.Chart = alt.Chart(self.ThailandProvincesTopo).mark_geoshape().encode(
            color = self.ColorSchema(df,'total_case',['white','#E34234','#640000']),
            tooltip = self.Tooltip(['properties.NAME_1','total_case','total_death'])
        ).transform_lookup(
            lookup='properties.NAME_1',
            from_ = alt.LookupData(df,'province',['total_case','total_death'])
        ).properties(
            width=Width,
            height=Height
        )
        self.Chart.save('ChartJSON/ThailandTopoChart.json')
        return self.Chart
    
    def BarChart(self):
        df = self.df
        df = self.dropAllandNone(df)
        self.Chart = alt.Chart(df).mark_bar(clip=True).encode(
            x = alt.X("province",type = "nominal", title= "จังหวัด"),
            y = alt.Y("total_case", 
                    type= "quantitative",
                    scale= alt.Scale(domain=[0,df["total_case"].max()]),
                    title= "ผู้ป่วยสะสม"),
            tooltip = ["province","total_case","total_death"]
        ).facet( column = "region"
        ).resolve_scale(x = 'independent',y = 'independent')
        self.Chart.save('ChartJSON/BarChart.json')
        return self.Chart

    def LineChart(self):
        self.SetDatetime()
        self.SumTotalCD()
        self.Chart = alt.Chart(self.df).mark_line(point=alt.OverlayMarkDef(filled=False, fill="white")
                                ).encode(
            x=alt.X("date",type="temporal", title= "วัน"),
            y=alt.Y(
                alt.repeat("layer"), aggregate="mean",title="ผู้ติดเชื้อสะสมทั้งประเทศ"),
            tooltip = ['date:T','allcase:Q','alldeath:Q'],
            color=alt.datum(alt.repeat("layer")),
        ).repeat(layer=["allcase", "alldeath"])
        self.Chart.save('ChartJSON/LineChart.json')
        return self.Chart
