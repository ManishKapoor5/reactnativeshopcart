import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  TextInput,
  SectionList,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Dropdown1 from './Dropdown1';
import { SearchSource } from 'jest';
import Card from './Card';
import { JSX } from 'react/jsx-runtime';
import axios from 'axios';
import Carousel1 from './Carousel1';
import Tabbar from './Tabbar';

function FirstComponent() {
  const data = [['Green way 3000']];
  const [apiData,setApiData] = useState([])
  
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then(function(response) 
    {
       setApiData(response.data)
  })},[])

  return (
    <View>
    <View style={styles.container}>
      
      <View style={styles.group0}>
        <Text style={styles.subgroup0}>Hey, Rahul</Text>
        <View>
          <Image
            source={require('./Assets/Vector327.png')}
            style={{marginLeft: 7}}></Image>
          <Image source={require('./Assets/Vector367.png')}></Image>
        </View>
      </View>
      <View style={styles.searchbox}>
        <Image
          source={require('./Assets/Search.png')}
          style={styles.searchImg}
        />
        <TextInput
          placeholder="Search products or store"
          placeholderTextColor={'#fff'}
        />
      </View>
      
       <Dropdown1 />
       
    </View>
    <Card />
    <Carousel1 />
    <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A4BA0',
    maxHeight: 280,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  subgroup0: {
    fontSize: 25,
    color: '#ffff',
  },
  group0: {
    marginTop: 52,
    marginLeft: 21,
    marginRight: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchbox: {
    backgroundColor: '#153075',
    borderRadius: 23,
    marginLeft: 21,
    marginRight: 21,
    marginTop: 17,
    paddingTop: 7,
    paddingBottom: 5,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  searchImg: {
    marginTop: 15,
    marginLeft: 7,
    marginRight: 5,
  },
  
  dropdown:{
    color: '#ffff',
  },
});

export default FirstComponent;
