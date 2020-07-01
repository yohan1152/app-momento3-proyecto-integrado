import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Asset } from 'expo-asset';

function CardComponentUser(props) {
    const {author} = props.user;
    console.log('author card',author);
    
    const navigation = useNavigation();
    const { _id, title, type, address, rooms, price, area, image } = props.properties;

    return (
        
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/'+image)} />
            <Text style={styles.appointmentText}>{title}</Text>
            <Text style={styles.text}>Type: {type}</Text>
            <Text style={styles.text}>Address: {address}</Text>
            <Text style={styles.text}>Rooms: {rooms}</Text>
            <Text style={styles.text}>Price: {price}</Text>
            <Text style={styles.text}>Area: {area}</Text>
            <Text style={styles.text}>Image: {image}</Text>
        

            <View style={styles.containerButtons}>
                <TouchableHighlight style={styles.updateButton} onPress={() =>
                    navigation.navigate('UpdateAppointment', {
                        id: _id,
                        title: title,
                        type: type,
                        address: address,
                        rooms: rooms,
                        area: area,
                        image: image,
                        author: author
                    })}>
                    <Text style={styles.updateButtonText}>Update</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.cancelButton} onPress={() => {
                    navigation.navigate('CancelAppointment', {
                        id: _id,
                        title: title,
                        type: type,
                        address: address,
                        rooms: rooms,
                        area: area,
                        image: image,
                        author: author
                        
                    })
                }}>
                     <Text style={styles.cancelButtonText}>Cancel</Text> 
                 </TouchableHighlight> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 20
    },
    image: {
        width: 160,
        height: 160,
        borderWidth: 1,
    },
    containerButtons: {
        flex: 1,
        flexDirection: "row",        
        top: 10,
        position: "absolute",
        right: 10 
    },
    appointmentTitleText: {
        fontWeight: 'bold',
        fontSize: 19,
        alignItems: 'center',
        padding: 2,
        margin: 2
    },
    appointmentText: {        
        fontSize: 18,
        alignItems: 'center',
        padding: 2,
        margin: 2
    },
    updateButton: {
        backgroundColor: '#03a9f4',
        padding: 1,
        margin: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.1
    },
    updateButtonText: {
        backgroundColor: '#03a9f4',
        padding: 1,
        margin: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.4

    },
    cancelButton: {
        backgroundColor: '#03a9f4',
        padding: 1,
        margin: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.1
        
    },
    cancelButtonText: {
        color: 'white'
    }

});

export default CardComponentUser;