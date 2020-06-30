import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'
import color from '../styles/colors';

function ListProperties({ navigation }) {
    // const { userid } = params; //Id de inicio de sesion    
    const isFocused = useIsFocused();
    const [appointments, setAppointments] = useState([]);

    /* Data for the flatlist */
    const fetchAppointments = async () => {
        //let response = await fetch('http://192.168.0.3:80/citapp_api_php/api/listappointments');
        let response = await fetch('http://www.json-generator.com/api/json/get/bUEFnRtzzC?indent=2');
        let jsonResponse = await response.json();
        setAppointments(jsonResponse.res.data);
        console.log('json response: ',jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    return (
        <View style={styles.container}>
          
            <TouchableHighlight style={styles.createAppointmentButton} onPress={() =>
                navigation.navigate('Create Property', {
                    userid: userid
                })}>
                <Text style={styles.createAppointmentButtonText}>Create Property</Text>
            </TouchableHighlight>

            {/* <Image source={require('../assets/casa1.jpg')} ></Image> */}
           
            <FlatList
                data={appointments}
                renderItem={({ item }) => <CardComponent appointment={item} />}
                keyExtractor={item => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.Black,
        color: color.White,
        alignItems: 'center',
    },
    image: {
        width: 160,
        height: 160,
        borderWidth: 1,
    },
    createAppointmentButton: {
        backgroundColor: color.AquaMarine,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
    },
    createAppointmentButtonText: {
        color: color.White,
        fontWeight: 'bold',
        fontSize: 17,
        textShadowColor: color.Black,
        textShadowRadius: 1.5,
    },
});


export default ListProperties;
