import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { JSX } from "react/jsx-runtime";

function Card(){
    return(
        <SafeAreaView>
    <View style={styles.cardcmp}>
        <ScrollView horizontal={true} pagingEnabled scrollEnabled>
    <View style={styles.card}>
        <Image source={require('./Assets/Card.png')}/>
        </View>
        <View style={styles.card}>
        <Image source={require('./Assets/Card.png')}/>
        </View>
        <View style={styles.card}>
        <Image source={require('./Assets/Card.png')}/>
        </View>
        <View style={styles.card}>
        <Image source={require('./Assets/Card.png')}/>
        </View>
        <View style={styles.card}>
        <Image source={require('./Assets/Card.png')}/>
        </View>
  </ScrollView>
  </View>
  </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop: 25,
        marginLeft:21,
        paddingRight:1
    },

})

export default Card;