import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
          <Text>{name}</Text>
            <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
                navigation.navigate('Create Property', {
                    author: author
                })}>
                <Text style={styles.createPropertyButtonText}>Create Property</Text>
            </TouchableHighlight>

            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponentUser properties={item} user={author} />}
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
    createPropertyButton: {
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
    createPropertyButtonText: {
        color: color.White,
        fontWeight: 'bold',
        fontSize: 17,
        textShadowColor: color.Black,
        textShadowRadius: 1.5,
    },
});


export default ListPropertiesUser;
