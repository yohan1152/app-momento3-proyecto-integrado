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
            <View style={styles.containerImage}>
                <TouchableHighlight style={styles.button} onPress={() =>
                    navigation.navigate('Login')}>
                    <Text style={styles.buttom}>LOGIN</Text>
                </TouchableHighlight>
            </View>
            <View>
                {/* <ScrollView> */}
                <Image style={styles.image} source={require('../assets/'+image)} />
                <Text style={styles.appointmentText}>{title}</Text>   
                <Text>Price: {price}</Text>
                {/* </ScrollView> */}

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
        color: color.White,
    },
    containerButtons: {
        paddingTop: 6,
        flex: 1,
        flexDirection: "row",   
        // backgroundColor: 'yellow'
    },
    buttom: {
        backgroundColor: color.AquaMarine,
        padding: 1,
        margin: 1,
        height: 30,
        width: Dimensions.get('screen').width * 0.18,
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

export default CardComponent;