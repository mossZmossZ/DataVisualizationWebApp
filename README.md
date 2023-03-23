# COVID-19 Data Visualization in Thailand

Due to the COVID-19 pandemic, there is currently a large amount of data related to the outbreak. Most of this data is collected in the form of statistics recorded in tables. However, interpreting this raw data can be time-consuming and challenging.

Therefore, data visualization, which is the process of presenting data in a graphical or pictorial format, is essential in order to quickly understand and make use of the information. When presented in a visual format, data can be easily understood and utilized.

As a result, there is an idea to gather data from reliable sources related to the COVID-19 outbreak, including infection rates and vaccination rates. This data can be used to create data visualizations, which can be presented on web applications.

## Design
The pages of a Web Application consist of a total of three pages as follows:

- Home Page
  - This page will be the first one that appears when accessing the Web Application. In the Header section of the Home Page, there will be a "Try Now" button for accessing the Covid-19 Page immediately without the need to select it from the NavBar. Following the Header section, this page will consist of two parts describing the Web Application as follows:
    - What is Data Visualization
    - What information we visualize about
- Covid-19 Page
  - This page is designed to be a display page for information about the Covid-19 infection situation in Thailand that has been analyzed and processed. In the Header section, statistical figures related to Covid-19 infections will be displayed, including the total number of confirmed cases, the number of recovered cases, and the number of deaths. In the Chart section, there will be three types of charts displayed: Map Chart, Bar Chart, and Line Chart. Users of the Web Application can select the data they want to display by filtering the data by year. The data will show the Covid-19 situation in Thailand for the past 3 years, which are 2023, 2022, and 2021, respectively. Additionally, users can also filter the data by area, which is divided into 6 regions in Thailand.
- About Us Page
  - This page is designed to display a list of developers of the Web Application, which includes our pictures, names, and contact channels such as email for each person. Users of the Web Application can search for specific developers by Thai name-surname, English name-surname, email contact, and student ID.

## Chart
This Chart uses Python's Altair library to generate various charts visualizing the total number of COVID-19 cases and deaths in each province in Thailand.
The data used for this visualization is sourced from COVID-19 patients and deaths in Thailand. The dataset includes information on the number of cases and deaths in each province.

### Map Chart

The map chart visualizes the distribution of COVID-19 cases and deaths in Thailand. TopoJSON charts are used to display various information on a map. The map chart displays the number of COVID-19 cases and deaths in each province using different colors and shades to indicate the severity of the situation in each region.

![image](https://user-images.githubusercontent.com/126886304/227299706-f068da03-1ea8-4649-b978-5e28b3754c87.png)


### Bar Chart

The bar chart represents the number of COVID-19 cases in each province in Thailand. The data used in this chart is the same as the previous section. The resulting chart provides an easy-to-understand picture of the COVID-19 situation in each province of the country. This chart also makes it easy to compare the number of cases in different regions.

![image](https://user-images.githubusercontent.com/126886304/227299935-3c8af9ac-b76a-4cb7-844e-653f0d60bf09.png)


### Line Chart

The line chart shows the cumulative cases and deaths from COVID-19 in Thailand over time. The X-axis represents the time interval, while the Y-axis shows the number of cases and total fatalities. The data used in this chart is also sourced from the previous section. The results provide a clear and easy-to-understand picture of the evolution of the COVID-19 situation in the country.

![image](https://user-images.githubusercontent.com/126886304/227299414-a961b0e0-e198-404c-8354-6d53b542f877.png)


### Tooltip

All charts in this project include a tooltip that provides detailed information on each province's data. Hovering over the data on the chart will reveal the tooltip.

![image](https://user-images.githubusercontent.com/126886304/227301201-d75b4ce5-13f6-46f5-91b4-9551e8015bb7.png)


## MEMBER

| Student ID | Name     | email address                |
| :-------- | :------- | :------------------------- |
| 63-010126-1001-9 | เนติพัฒน์ สุกใส    | netipat.ss@gmail.com |
| 63-010126-2002-2 | จิตฤดี ดวงดี      |   s6301012620022@email.kmutnb.ac.th |
| 63-010126-2011-1 | ฐานวัฒน์ ทองเปี้ย  |   thanawat.tp@outlook.com |
| 63-010126-3003-6 | ฐิตานันท์ มหาพรชัย |   s6301012630036@email.kmutnb.ac.th |
| 63-010126-3016-8 | วรวิช เซ็นธุลี     |   vorawit.chenthulee@gmail.com |
| 64-010126-2002-1 | ณัฐวีร์ นริศชาติ    |   nattavee123vee@gmail.com |
| 64-010126-2014-5 | สุรชัย สันติภาพ    |   s6401012620145@email.kmutnb.ac.th |
| 64-010126-2024-2 | แสง รงยง   |       s6401012620242@email.kmtnb.ac.th |
| 64-010126-3008-6 | นรินทร์ ศิริณภัค    |   nsirinapuk@gmail.com |
