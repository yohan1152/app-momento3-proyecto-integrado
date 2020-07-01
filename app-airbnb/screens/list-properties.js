import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'
import color from '../styles/colors';

function ListProperties({ navigation }) {
    
    const isFocused = useIsFocused();
    const [properties, setProperties] = useState([]);

    const fetchAppointments = async () => {
        let response = await fetch('http://localhost:3000/api/listproperties');
        let jsonResponse = await response.json();
        setProperties(jsonResponse.res.data);
        console.log('json response: ',jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    return (
        <View style={styles.container}>           
            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponent properties={item} />}
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
