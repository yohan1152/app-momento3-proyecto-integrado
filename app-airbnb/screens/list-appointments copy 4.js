import React, { useState, useEffect, Component } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'

class ListAppointments extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }

  renderItem = () => {
    return (
      <View style={styles.container}>
        {/* <Image style={{ width:100, heigth:100}}
          source={{ uri: item.image }} /> */}
        <View>
          <Text style={styles.text}>Title: {item.title}</Text>
          <Text style={styles.text}>Type: {item.type}</Text>
          <Text style={styles.text}>Address: {item.address}</Text>
          <Text style={styles.text}>Rooms: {item.rooms}</Text>
          <Text style={styles.text}>Price: {item.price}</Text>
          <Text style={styles.text}>Area: {item.area}</Text>
        </View>
      </View>
    )

  }
  componentWillMount() {
    const url = 'http://www.json-generator.com/api/json/get/cfnpenYTfS?indent=0'

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.properties
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 100
  },
  card: {
    padding: 10,
  },
  createAppointmentButton: {
    backgroundColor: '#0288d1',
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  createAppointmentButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
});


export default ListAppointments;
