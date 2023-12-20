import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useEffect } from 'react';
import axios from 'axios';

const Dropdown1 = () => {

  const [selected, setSelected] = React.useState("");
  
    
  
  const data1 = [
      {key:'1', value:'1 Hour'},
      {key:'2', value:'2 Hour'},
      {key:'3', value:'3 Hour'},
      {key:'4', value:'4 Hour'},
      {key:'5', value:'5 Hour'},
      {key:'6', value:'6 Hour'},
      {key:'7', value:'7 Hour'},
  ]
    
  
  const data = [
      {key:'1', value:'Rithala'},
      {key:'2', value:'Gurgoan'},
      {key:'3', value:'Delhi'},
      {key:'4', value:'Connaught Place'},
      {key:'5', value:'Inderprasth'},
      {key:'6', value:'Barakhambha'},
      {key:'7', value:'Mandi House'},
  ]

  return(
    <View style={styles.dropdowngroup}>
    
      <View style={styles.group1}>
        <Text style={styles.dropDown2}>DELIVERY TO</Text>
        
       
    <SelectList 
        arrowicon={<Image source={require('./Assets/arrowIcon.png')}/>}
      
        dropdownItemStyles={styles.inputStyle}
      
        inputStyles={styles.inputStyle}
        boxStyles={styles.dropdown}
        setSelected={(val) => setSelected(val)} 
        defaultOption={{ key:'1', value:'Rithala' }}
        data={data} 
        save="value"
    />
    </View>
    <View  style={styles.group1}>
    <Text style={styles.dropDown2}>Within</Text>
    <SelectList 
        arrowicon={<Image source={require('./Assets/arrowIcon.png')}/>}
      
        dropdownItemStyles={styles.inputStyle}
        badgeTextStyles={styles.inputStyle}
        inputStyles={styles.inputStyle}
        boxStyles={styles.dropdown}
        setSelected={(val) => setSelected(val)} 
        defaultOption={{ key:'1', value:'1 Hour' }}
        data={data1} 
        save="value"
    />
    </View>
    </View>
    
  )

};

const styles = StyleSheet.create({
  dropdown:{
    maxWidth:150,
    maxHeight:45,
    color:'#ffff',
  },
  inputStyle:{
    maxWidth:150,
    color: '#ffff',
    
  },
  dropIcon1:{
    color:'#ffff'
  },
  search:{
    fontSize:1,
  },
  Text: {
    color: '#F8F9FB',
    fontSize: 11,
  },
  group1: {
    marginTop: 25,
    marginLeft: 21,
    flexDirection: 'column',
    marginEnd: 21
  },
  
  dropdownGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  dropdowngroup:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropDown2:{
    marginTop:-17,
    color:'#ffff',
  
  },
  dropdown:{
    maxWidth:100,
    maxHeight:45,
    color:'#ffff'
  },
  inputStyle:{
    maxWidth:110,
    color: '#ffff'
  },
  dropIcon1:{
    color:'#ffff'
  },
  search:{
    fontSize:1,
  },
})

export default Dropdown1;