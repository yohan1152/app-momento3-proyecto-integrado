import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'

function ListAppointments({navigation }) {
    // const { userid } = route.params;    
    const isFocused = useIsFocused();
    const [appointments, setAppointments] = useState([]);

    /* Data for the flatlist */
    const fetchAppointments = async () => {
        //let response = await fetch('http://192.168.0.3:80/citapp_api_php/api/listappointments');
        let response = await fetch('http://www.json-generator.com/api/json/get/cfnpenYTfS?indent=0');
        let jsonResponse = await response.json();
        setAppointments(jsonResponse.properties);
    }
    // useEffect(() => {
    //     fetchAppointments();
    // }, [isFocused]);
    const DATA = 
    {
      "properties": [
        {
          _id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
          type: "casa",
          address: "cra 3",
          rooms: 1,
          price: 200000000,
          area: 23,
          userid:"bd7acbea"
        },
        {
          _id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
          type: "casa",
          address: "cra 3",
          rooms: 1,
          price: 200000000,
          area: 23,
          userid:"bd7acbea"
        },
        {
          _id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
          type: "casa",
          address: "cra 3",
          rooms: 1,
          price: 200000000,
          area: 23,
          userid:"bd7acbea"
        },
      ]
    }

      
      const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
          <Text style={styles.text}>Title: {item.title}</Text>
          <Text style={styles.text}>Type: {item.type}</Text>
          <Text style={styles.text}>Address: {item.address}</Text>
          <Text style={styles.text}>Rooms: {item.rooms}</Text>
          <Text style={styles.text}>Price: {item.price}</Text>
          <Text style={styles.text}>Area: {item.area}</Text>
        </TouchableOpacity>
      );
      const [selectedId, setSelectedId] = useState(null);

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{ backgroundColor }}
          />
        );
      };
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={appointments}
            renderItem={({ item }) => <CardComponent appointment={item} />}
            keyExtractor={(item) => item._id}
            extraData={selectedId}
          />
        </SafeAreaView>
      );
    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 100
    },
    card:{
      padding:10,
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
