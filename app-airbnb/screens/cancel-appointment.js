import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import color from '../styles/colors';

function CancelAppointment({ route, navigation }) {
    // const { itemId, itemDate, itemTitle, userid} = route.params;
    const updateAppointment = async () => {

        try {
            const response = await fetch('http://192.168.0.3:3000/api/deleteappointment', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: itemId,
                }),
            });
            const json = await response.json();
            Alert.alert("Appointment deleted successfuly");
            navigation.navigate('ListAppointments');
        } catch (error) {
            Alert.alert("An error has ocurred: " + error);            
        }
    }


    return (
        <View style={styles.container}> 
            <View style={styles.containerForm}>
                <Text style={styles.text}>Description: {}</Text>
                <Text style={styles.text}>Date: {}</Text>
                <TouchableHighlight style={styles.createAppointmentButton} onPress={()=>
                Alert.alert(
                    'Cancel Appointment',
                    'Are you sure you want to cancel this appointment?',
                    [
                        { text: 'Cancel', style: 'cancel', },
                        {
                            text: 'OK', onPress: updateAppointment
                        },
                    ],
                    { cancelable: false },
                )}>
                    <Text style={styles.textStyleButton}>Delete</Text>
                </TouchableHighlight>
            </View>                       
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: color.Black,
    },
    containerForm:{
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.Gray,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        width: Dimensions.get('screen').width * 0.8,
        height: '40%',
    },
    text: {
        padding: 10,
        borderColor: color.Black,
        backgroundColor: color.Gray,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        marginTop: 10,
        color: color.White,
        width: Dimensions.get('screen').width * 0.6
    },
    createAppointmentButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: color.AquaMarine,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        height: 40,
        width: Dimensions.get('screen').width * 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyleButton: {
        color: color.White,
        fontWeight: 'bold',
        fontSize: 17,
        textShadowColor: color.Black,
        textShadowRadius: 1.5,
    }
});
export default CancelAppointment;	