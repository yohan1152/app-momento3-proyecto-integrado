import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import color from '../styles/colors';

function CardComponentUser(props) {
    // const {author} = props.user;
    // console.log('author card',author);
    
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
        
            <View style={styles.containerButtons}>
                <TouchableHighlight style={styles.buttom} onPress={() =>
                    navigation.navigate('UpdateProperties', {
                        id: _id,
                        title: title,
                        type: type,
                        address: address,
                        price: price,
                        rooms: rooms,
                        area: area,
                        image: image
                        
                    })}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttom} onPress={() => {
                    navigation.navigate('DeleteProperties', {
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
                     <Text style={styles.buttonText}>Delete</Text> 
                 </TouchableHighlight> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 20,
        flexDirection: 'colunm',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.Gray,
        width: Dimensions.get('screen').width * 0.8,
        height: '100%',
        borderRadius: 10,
    },
    containerImage:{
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width * 0.7,
        height: 200,
        borderWidth: 1,
        borderRadius: 10,
    },
    appointmentText: {        
        fontSize: 18,
        alignItems: 'center',
        padding: 2,
        margin: 2,
        color: color.White,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 18,
        color: color.White,
    },
    containerButtons: {
        paddingTop: 6,
        flex: 1,
        flexDirection: "row",   
    },
    buttom: {
        backgroundColor: color.AquaMarine,
        padding: 1,
        margin: 1,
        height: 30,
        width: Dimensions.get('screen').width * 0.14,
        marginLeft: 8,
        borderRadius: 10,
        borderColor: color.Black,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: color.White,
        textShadowColor: color.Black,
        textShadowRadius: 2,
    }

});

export default CardComponentUser;