import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'

function ListProperties({ route, navigation }) {
    const { author } = route.params; //Id de inicio de sesion  
    console.log('log author',author);
      
    const isFocused = useIsFocused();
    const [properties, setProperties] = useState([]);

    /* Data for the flatlist */
    const fetchProperties = async () => {
        // let response = await fetch('http://www.json-generator.com/api/json/get/bUEFnRtzzC?indent=2');
        let response = await fetch('http://localhost:3000/api/getpropertiesuser?'+author);
        let jsonResponse = await response.json();
        setProperties(jsonResponse.res.data);
        console.log('json response: ',jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchProperties();
    }, [isFocused]);

    return (
        <View style={styles.container}>
          
            <TouchableHighlight style={styles.createAppointmentButton} onPress={() =>
                navigation.navigate('Create Property', {
                    author: author
                })}>
                <Text style={styles.createAppointmentButtonText}>Create Property</Text>
            </TouchableHighlight>

            {/* <Image source={require('../assets/casa1.jpg')} ></Image> */}
           
            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponent appointment={item} />}
                keyExtractor={item => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        width: 160,
        height: 160,
        borderWidth: 1,
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
    title: {
        fontSize: 16,
        color: '#000'
    },
});


export default ListProperties;
