import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'

function ListAppointments({navigation }) {
    // const { userid } = route.params;    
    const isFocused = useIsFocused();
    const [appointments, setAppointments] = useState([]);

    /* Data for the flatlist */
    const fetchAppointments = async () => {
        //let response = await fetch('http://192.168.0.3:80/citapp_api_php/api/listappointments');
        let response = await fetch('http://localhost:3000/api/listproperties');
        let jsonResponse = await response.json();
        setAppointments(jsonResponse.properties);
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            {/* <TouchableHighlight style={styles.createAppointmentButton} onPress={() =>
                navigation.navigate('CreateAppointment', {
                    userid: userid
                })}>
                <Text style={styles.createAppointmentButtonText}>Create Appointment</Text>
            </TouchableHighlight> */}
            <FlatList
                data={[{key="a"}, {key="b"}]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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


export default ListAppointments;
