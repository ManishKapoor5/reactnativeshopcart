import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductDetails =({data})=> {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then(function (output) {
        setApiData(output.data);
        console.log(output.data);
      });
    }, []);
    const navigation = useNavigation();
    const numColumn = 1;
    return(
        <View style={styles.product}>
      <Text style={styles.title}>Recommended</Text>
       {/* <View style={styles.list}> */}
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
                  <View style={styles.btngrp}>
                  <Pressable style={styles.cartbtn}><Text style={styles.carttext}>Add To Cart</Text></Pressable>
                  <Pressable style={styles.buybtn}><Text style={styles.buytext}>Buy Now</Text></Pressable>
                  </View>
                  <View><Text style={styles.description}>{item.description.substring(0,130).concat('...')}</Text></View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        
      
      
    </View>
    )
}

const styles = StyleSheet.create({
    recommended: {
      height: 500,
      width: 380,
      flexDirection: 'row',
      marginTop: 11,
      marginLeft: 17,
      padding: 11,
      
    
    },
    img: {
      flexDirection: 'row',
      marginBottom: 21,
    },
    image: {
      height: 180,
      width: 310,
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
    cartbtn: {
        backgroundColor: '#ffff',
        width:95,
        height:30,
        borderRadius: 10,
        color: '#2A4BA0',
        border: '3 solid #2A4BA0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:21,
        marginRight: 11
    },
    buybtn: {
        backgroundColor: '#2A4BA0',
        width:75,
        height:30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:21,
    },
    btngrp:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    carttext:{
        color:'#2A4BA0'
    },
    buytext:{
        color: '#FFFF'
    },
    description:{
        fontWeight:'900',
        fontSize:21,
        marginTop:11
    }
  });
  
export default ProductDetails