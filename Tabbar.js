import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Tabbar=()=>{

    return(
        <View style={styles.Tab}>
            <Image source={require('./Assets/Polygon1.png')} style={styles.tabImg} />
            <Image source={require('./Assets/home1.png')} style={styles.home} />
            <View style={styles.TabIcon}>
            <Image source={require('./Assets/category.png')} style={styles.category} />
           <View style={styles.textcategory}><Text>Categories</Text></View>
           <Image source={require('./Assets/favourite.png')} style={styles.category} />
           <View style={styles.textcategory}><Text>Categories</Text></View>
           <Image source={require('./Assets/more.png')} style={styles.more} />
           <View style={styles.textcategory}><Text>More</Text></View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
  Tab:{
    height: 70,
    backgroundColor: '#ffff',
    width: Dimensions.get('window').width,
    position: 'relative',
    bottom: 510
  },
  tabImg: {
    height: 55,
    width: 55,
    bottom:15,
    left: 21
  },
  home:{
    height: 21,
    width:21,
    bottom:55,
    left:37
  },
  category:{
    height: 30,
    width: 30,
    bottom: 60,
    left: 150
  },
  TabIcon: {
    flexDirection: 'row',
  },
  more:{
    height: 30,
    width: 30,
    left:130,
    bottom:60
  },
  textcategory:{
    bottom:30,
    left: 100
  }
})

export default Tabbar