import React, {useEffect, useState} from 'react';

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
  Dimensions,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dropdown1 from './Dropdown1';

import Card from './Card';
import {JSX} from 'react/jsx-runtime';
import axios from 'axios';
import Carousel1 from './Carousel1';

import Tabbar from './Tabbar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './ProductDetails';
import FirstComponent from './FirstComponent';

function App() {
  const data = [['Green way 3000']];
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(function (response) {
      setApiData(response.data);
    });
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='First'>
        <Stack.Screen name="First" component={FirstComponent} />
        
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A4BA0',
    maxHeight: 250,
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

  dropdown: {
    color: '#ffff',
  },
});

export default App;
