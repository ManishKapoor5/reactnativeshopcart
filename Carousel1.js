import React from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
function Carousel1() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(function (output) {
      setApiData(output.data);
      console.log(output.data);
    });
  }, []);
  const navigation = useNavigation();
  const numColumn = 2;
  return (
    <View style={styles.product}>
      <Text style={styles.title}>Recommended</Text>
      <View style={styles.list}>
        <FlatList
          data={apiData}
          numColumns={numColumn}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.recommended}
                activeOpacity={1}
                onPress={() => {
                  navigation.navigate('ProductDetails',{data:item});
                }}>
                <View style={styles.productItem}>
                  <View style={styles.img}>
                    <Image
                      style={styles.like}
                      source={require('./Assets/Vector.png')}
                    />

                    <Image
                      source={{uri: item.image}}
                      alt="thumbnail"
                      style={styles.image}
                    />
                  </View>

                  <View style={styles.itemAdd}>
                    <Text style={styles.prices}>{item.price}</Text>

                    <Pressable style={styles.button}>
                      <Text style={styles.btnText}>+</Text>
                    </Pressable>
                  </View>
                  <View>
                    <Text>{item.category}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recommended: {
    height: 190,
    width: 180,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 17,
    padding: 11,
    borderRadius: 21,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 5,
  },
  img: {
    flexDirection: 'row',
    marginBottom: 21,
  },
  image: {
    height: 80,
    width: 130,
    marginLeft: -5,
    marginBottom: 1,
    marginTop: 23,
    borderRadius: 10,
  },
  like: {
    height: 15,
    width: 17,
  },
  prices: {
    fontWeight: '900',
    padding: 3,
    color: 'black',
  },
  itemAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#2A4BA0',
    borderRadius: 150,
    width: 21,
    height: 21,
  },
  btnText: {
    color: '#FFFF',
    alignSelf: 'center',
  },
  list: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 21,
    marginLeft: 21,
  },
  product: {
    height: Dimensions.get('window').height,
  },
});

export default Carousel1;
