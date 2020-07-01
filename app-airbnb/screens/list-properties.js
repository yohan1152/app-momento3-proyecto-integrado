import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'

function ListProperties({ navigation }) {
    // const { author } = route.params; //Id de inicio de sesion  
      
    const isFocused = useIsFocused();
    const [properties, setProperties] = useState([]);

    /* Data for the flatlist */
    const fetchProperties = async () => {
        // let response = await fetch('http://www.json-generator.com/api/json/get/bUEFnRtzzC?indent=2');
        let response = await fetch('http://localhost:3000/api/listproperties');
        let jsonResponse = await response.json();
        setProperties(jsonResponse.res.data);
        console.log('json response: ',jsonResponse.res.data);
        
    }
    useEffect(() => {
        fetchProperties();
    }, [isFocused]);

    return (
        <View style={styles.container}>

            <FlatList
                data={properties}
                renderItem={({ item }) => <CardComponent properties={item} />}
                keyExtractor={item => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
});


export default ListProperties;
