import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import color from '../styles/colors';

function validate(title, type, address, rooms, price, area) {
    var error = "";
    var error_type = "";
    if (title.length < 1) { error = error + "title, " }
    if (isNaN(title)) { error_type = error_type + "title is not a number " }
    if (type.length < 1) { error = error + "type, " }
    if (isNaN(type)) { error_type = error_type + "type is not a number " }
    if (address.length < 1) { error = error + "address, " }
    if (rooms.length < 1) { error = error + "rooms, " }
    if (isNaN(price)) { error_type = error_type + "price is not a number " }
    if (price.length < 1) { error = error + "price, " }
    if (area.length < 1) { error = error + "area, " }
    // if (image.length < 1) { error = error + "image, " }
    // if (author.length < 1) { error = error + "author, " }

    if (error.length > 0) {
        Alert.alert("Form failed","The following items require your attention: " + error);
        return false;
    } else {
        if (error_type.length < 1) {
            Alert.alert("Form failed","The following items require your attention: " + error_type);
            return true;
        } else {
            return false;
        }
    }
}

function CreateProperties({ route, navigation }) {
    // const { author } = route.params; 
    const { author } = '5ef8fd4d6072c6366c19017e'; //quemado
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [rooms, setRooms] = useState("");
    const [price, setPrice] = useState("");
    const [area, setArea] = useState("");
    const [image, setImage] = useState("");
    // const [author, setAuthor] = useState("");
    
    const createProperties = async () => {
        if (validate(title, type, address, rooms, price, area, image, author)) {
            try {
                const response = await fetch('http://192.168.0.3:3000/api/add', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: title,
                        date: type,
                        address: address,
                        rooms: rooms,
                        price: price,
                        area: area,
                        image: image,
                        author: author,
                    }),
                });
                const json = await response.json();
                Alert.alert("Property created successfuly");
                navigation.navigate('ListProperties', {
                    author: author
                });
            } catch (error) {
                Alert.alert("An error has ocurred: " + error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <TextInput style={styles.textInput} placeholder="Title" onChangeText={text => setTitle(text)} />
                <TextInput style={styles.textInput} placeholder="Type" onChangeText={text => setType(text)} />
                <TextInput style={styles.textInput} placeholder="Address" onChangeText={text => setAddress(text)} />
                <TextInput style={styles.textInput} placeholder="Number of Rooms" onChangeText={text => setRooms(text)} />
                <TextInput style={styles.textInput} placeholder="Price" onChangeText={text => setPrice(text)} />
                <TextInput style={styles.textInput} placeholder="Area" onChangeText={text => setArea(text)} />
                {/* <TextInput style={styles.textInput} placeholder="Image" onChangeText={text => setImage(text)} /> */}
                <TouchableHighlight style={styles.createPropertyButton} onPress={createProperties}>
                    <Text style={styles.textStyleButton}>Create Property</Text>
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
        height: '60%',
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
    createPropertyButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: color.AquaMarine,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        height: 40,
        width: Dimensions.get('screen').width * 0.4,
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

export default CreateProperties;