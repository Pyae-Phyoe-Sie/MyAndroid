import React, { PropsWithChildren, useEffect, useState } from 'react';
import {Button, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import { FAB } from 'react-native-elements';

type SectionProps = PropsWithChildren<{
  monthArray: [
    {
      id: Number,
      labelId: String,
      name: String,
      keyword: String,
      image: Object,
      description: String
    }
  ],
  index: Number,
  setDetailView: Function
}>;

function MonthList({monthArray, index, setDetailView}: SectionProps): JSX.Element {
  
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {monthArray.map((value, i) => {
        return (
          <View key={i} style={[styles.view, {flex: 1} ]}>
            <ImageBackground source={value.image} resizeMode="cover" style={{flex: 1, height: '100%'}}>
              <View style={{
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'row',
              }}>
                <View style={{ flex: 1, backgroundColor: "#000000b3", paddingHorizontal: 20, paddingBottom: 40, paddingTop: 15 }}>
                  <Text style={styles.labelId}>{value.labelId}</Text>
                  <Text style={styles.name}>{value.name}</Text>
                  <Text style={styles.keyword}>{value.keyword}</Text>
                  <Button color="#555555" title="Detail" onPress={() => setDetailView({view: true, parentKey: index, viewKey: i})} />
                </View>
                <View style={{ flex: 2 }}></View>
              </View>
            </ImageBackground>
          </View>
        )
      })}
    </View>
  )
}

type MonthProps = PropsWithChildren<{
  MonthDetail: {
    id: Number,
    labelId: String,
    name: String,
    keyword: String,
    image: Object,
    description: String
  },
  setDetailView: Function
}>;

function MonthDetail({MonthDetail, setDetailView}: MonthProps): JSX.Element {
  return (
    <View style={styles.detailView}>
      <ImageBackground source={MonthDetail.image} resizeMode="contain" style={{flex: 1, width: "100%", backgroundColor: "#000"}}>
        
      </ImageBackground>
      <View style={{
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
          flex: 2,
          padding: 20
        }}>
          <View style={{ flex: 1, backgroundColor: "#fff"}}>
            <Text style={styles.detailLabelId}>{MonthDetail.labelId}</Text>
            <Text style={styles.detailName}>{MonthDetail.name}</Text>
            <Text style={styles.detailKeyword}>{MonthDetail.keyword}</Text>
            <Text style={styles.detaildescription}>{MonthDetail.description}</Text>
            <Button color="#b55240" title="Back" onPress={() => setDetailView({view: false, parentKey: 0, viewKey: 0})} />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
    </View>
  )
}

const Month = () => {

  const months = [
    [
      {
        id: 1,
        labelId: "01",
        name: "JAN",
        keyword: "Lunar New Year",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-january-written-hanging-ice-blue-hearts-white-wooden-snowflakes-weathered-planks-background-167656551.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 2,
        labelId: "02",
        name: "FEB",
        keyword: "Valuntine Day",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-february-written-hanging-red-hearts-old-wooden-background-weathered-108606445.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 3,
        labelId: "03",
        name: "MAR",
        keyword: "Health is wealth",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-march-written-hanging-green-hearts-weathered-wooden-background-hello-march-written-hanging-green-hearts-110832512.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 4,
        labelId: "04",
        name: "APR",
        keyword: "Earth Day",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-april-alphabet-letters-wooden-background-160820807.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
    ],
    [
      {
        id: 5,
        labelId: "05",
        name: "MAY",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/may-word-made-metallic-letterpress-dark-jeans-background-may-word-den-117145438.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 6,
        labelId: "06",
        name: "JUN",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-june-couple-resting-near-sea-sunny-day-215540568.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },

      {
        id: 7,
        labelId: "07",
        name: "JUL",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/july-word-view-blue-table-177146983.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 8,
        labelId: "08",
        name: "AUG",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-august-word-abstract-wood-type-vintage-letterpress-blocks-against-grunge-wooden-background-cup-coffee-93101131.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
    ],
    [
      {
        id: 9,
        labelId: "09",
        name: "SEP",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/september-word-single-letters-cork-board-45771172.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 10,
        labelId: "10",
        name: "OCT",
        keyword: "Happy Hallowen",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-october-pumpkins-spooky-forest-night-hello-october-pumpkins-night-127071585.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 11,
        labelId: "11",
        name: "NOV",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-november-message-pumpkins-house-collection-autumn-toy-130035240.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 12,
        labelId: "12",
        name: "DEC",
        keyword: "Lorem Ipsum",
        image: {uri: "https://thumbs.dreamstime.com/b/hello-december-message-little-car-carrying-christmas-tree-hello-december-message-car-carrying-christmas-tree-128991445.jpg"},
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
    ]
  ];

  const [detailView, setDetailView] = useState({
    view: false,
    parentKey: 0,
    viewKey: 0
  });

  return (
      <>
      <FAB title="Back" />
        {(!detailView.view)
          ? 
          <Swiper style={styles.wrapper} horizontal={false} loop={true}
                showsPagination={false}>
            {months.map((monthArray, index) => {
              return (
                <MonthList monthArray={monthArray} key={index} index={index} setDetailView={setDetailView}/>
              )
            })}
          </Swiper>
          :
            <MonthDetail MonthDetail={months[detailView.parentKey][detailView.viewKey]} setDetailView={setDetailView}/>
        }
      </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {},
    view: {
      height: 206
    },
    detailView: {
      height: 828,
      backgroundColor: "#fff"
    },
    labelId: {
      fontSize: 36,
      color: "#fff",
      borderBottomColor: "#efefef",
      borderBottomWidth: 1,
      width: 100,
    },
    name: {
      fontSize: 20,
      color: "#fff"
    },
    keyword: {
      fontSize: 16,
      color: "#fff",
      marginBottom: 20
    },
    detailLabelId: {
      fontSize: 50,
      color: "#b55240",
      borderBottomColor: "#b55240",
      borderBottomWidth: 1,
      width: 100
    },
    detailName: {
      fontSize: 24,
      color: "#b55240"
    },
    detailKeyword: {
      fontSize: 16,
      color: "#b55240",
    },
    detaildescription: {
      fontSize: 14,
      color: "#b55240",
      paddingTop: 30,
      marginBottom: 30
    },
});

export default Month;