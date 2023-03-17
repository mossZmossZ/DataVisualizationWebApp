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
    
    def ThailandTopoChart(self,Width,Height):
        chart = alt.Chart(self.ThailandProvincesTopo).mark_geoshape().encode(
            color = self.ColorSchema(self.SumDuplicateValue(),'total_case',['white','#E34234','#640000']),
            tooltip = self.Tooltip(['properties.NAME_1','total_case','total_death'])
        ).transform_lookup(
            lookup='properties.NAME_1',
            from_ = alt.LookupData(self.SumDuplicateValue(),'province',['total_case','total_death'])
        ).properties(
            width=Width,
            height=Height
        )
        chart.save('ChartJSON/ThailandTopoChart.json')
        return chart
