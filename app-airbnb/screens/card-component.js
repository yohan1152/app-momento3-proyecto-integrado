import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import color from '../styles/colors';

function CardComponent(props) {
    const navigation = useNavigation();
    const { _id, title, type, address, rooms, price, area, image } = props.properties;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/'+image)} />
            <Text style={styles.appointmentText}>{title}</Text>   
            <Text style={styles.text}>Price:  $ {price}</Text>
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
        color: color.White,
    },
});

export default CardComponent;