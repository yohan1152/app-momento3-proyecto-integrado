import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponentUser from './card-component-user'
import color from '../styles/colors';

function ListPropertiesUser({ route,navigation }) {
    const { author } = route.params; //Id de inicio de sesion  
    const { name } = route.params
    const isFocused = useIsFocused();
    const [properties, setProperties] = useState([]);

    /* Data for the flatlist */
    const fetchAppointments = async () => {
        let response = await fetch('http://localhost:3000/api/getpropertiesuser?authorid='+author);
        let jsonResponse = await response.json();
        setProperties(jsonResponse.res.data);
        console.log('json response: ',jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={styles.containerBanner}>
                <Text style={styles.textBanner}>{name}</Text>
                <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
                    navigation.navigate('CreateProperties', {
                        author: author
                    })}>
                    <Text style={styles.createPropertyButtonText}>Create</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
                    navigation.navigate('Login')}>
                    <Text style={styles.createPropertyButtonText}>Log Out</Text>
                </TouchableHighlight>
            </View>  
            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponentUser properties={item} />}
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
    containerBanner:{
        width: Dimensions.get('screen').width * 0.8,
        paddingTop: 12,
        paddingBottom: 12,
        flex: 1,
        flexDirection: "row",   
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textBanner:{
        fontSize: 20,
        color: color.White,
        textShadowColor: color.Black,
        textShadowRadius: 2,
    },
    image: {
        width: 160,
        height: 160,
        borderWidth: 1,
    },
    createPropertyButton: {
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
    createPropertyButtonText: {
        color: color.White,
        textShadowColor: color.Black,
        textShadowRadius: 2,
    },
});


export default ListPropertiesUser;
