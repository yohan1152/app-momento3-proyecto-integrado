import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import color from '../styles/colors';

function UpdateProperties({ route, navigation }) {
    const { id, title, type, address, rooms, price, area, image, author } = route.params; 
    console.log('params',title, author);
    
    const [propertyTitle, setTitle] = useState('');    
    // const [propertyType, setType] = useState(type);
    // const [propertyAddress, setAddress] = useState(address);    
    // const [propertyRooms, setRooms] = useState(rooms);
    // const [propertyPrice, setPrice] = useState(price); 
    // const [propertyArea, setArea] = useState(area);

    const putFetch = async () => {

        // try {
        //     const response = await fetch('http://localhost:3000/api/updateproperty', {
        //         method: 'PUT',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             id: id,
        //             title: propertyTitle,
        //             type: propertyType,
        //             address: propertyAddress,
        //             price: propertyPrice,
        //             rooms: propertyRooms,
        //             area: propertyArea,
        //             image: image,
        //             author: author
        //         }),
        //     });
        //     const json = await response.json();
        //     Alert.alert("Appointment updated successfuly");
        //     navigation.navigate('ListAppointmentsUsers',{
        //         author: author
        //       });
        // } catch (error) {
        //     Alert.alert("An error has ocurred: " + error);            
        // }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerForm} >
                <TextInput style={styles.textInput} placeholder="title" onChangeText={text => setTitle(text)}>{title}</TextInput>
                {/* <TextInput style={styles.textInput} placeholder="type" onChangeText={text => setType(text)}>{type}</TextInput>
                <TextInput style={styles.textInput} placeholder="address" onChangeText={text => setAddress(text)}>{address}</TextInput>
                <TextInput style={styles.textInput} placeholder="price" onChangeText={text => setPrice(text)}>{price}</TextInput>
                <TextInput style={styles.textInput} placeholder="rooms" onChangeText={text => setRooms(text)}>{rooms}</TextInput>
                <TextInput style={styles.textInput} placeholder="area" onChangeText={text => setArea(text)}>{area}</TextInput> */}
                <TouchableHighlight style={styles.createAppointmentButton} onPress={putFetch}>
                    <Text style={styles.textStyleButton}>Update</Text>
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
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.Gray,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        width: Dimensions.get('screen').width * 0.8,
        height: '70%',
    },
    textInput: {
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
        width: Dimensions.get('screen').width * 0.30,
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
export default UpdateProperties;	