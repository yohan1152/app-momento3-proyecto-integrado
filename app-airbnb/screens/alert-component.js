import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import CardComponentUser from './card-component-user'
import color from '../styles/colors';
import { render } from 'react-dom';

function Alert(props) {

  return(

    <View style={styles.containerBanner}>
        <Text style={styles.textBanner}>Are you sure?</Text>
        <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
            navigation.navigate(props.navigateto, {
                // author:author
            })}>
            <Text style={styles.createPropertyButtonText}>Ok</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
            navigation.navigate(props.navigatecancel)}>
            <Text style={styles.createPropertyButtonText}>Cancel</Text>
        </TouchableHighlight>
    </View> 
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.Black,
    color: color.White,
    alignItems: 'center',
  },
  createPropertyButtonText: {
    color: color.White,
    textShadowColor: color.Black,
    textShadowRadius: 2,
  },
  containerBanner:{
    width: Dimensions.get('screen').width * 0.8,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    flexDirection: "row",   
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignItems: 'center',
},
  containerButtom: {
    width: Dimensions.get('screen').width * 0.8,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    flexDirection: "row",   
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttom: {
    backgroundColor: color.AquaMarine,
    padding: 1,
    margin: 1,
    height: 30,
    width: Dimensions.get('screen').width * 0.18,
    marginLeft: 8,
    borderRadius: 10,
    borderColor: color.Black,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttomText: {
    color: color.White,
    textShadowColor: color.Black,
    textShadowRadius: 2,
  },
});


export default ListPropertiesUser;
