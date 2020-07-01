import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import color from '../styles/colors';

function DeleteProperties({ route, navigation }) {
    const { id, author} = route.params;
    console.log('item id',id,author);

    const deleteFetch = async () => {

        try {
            const response = await fetch('http://localhost:3000/api/deleteproperty?id='+id, {
                method: 'DELETE'
            })
            const json = await response.json();
            console.log('success',json.res.success);
            
            Alert.alert("Appointment deleted successfuly");
            navigation.navigate('ListPropertiesUser',{
                author:author
            });
        } catch (error) {
            Alert.alert("An error has ocurred: " + error);            
        }
    }


    return (
        <View style={styles.container}> 
            <View style={styles.containerForm}>
                
            <View style={styles.containerBanner}>
            <Text style={styles.textBanner}>Are you sure?</Text>
            
            <TouchableHighlight style={styles.createPropertyButton} onPress={deleteFetch}>
                <Text style={styles.createPropertyButtonText}>Ok</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.createPropertyButton} onPress={() =>
                navigation.navigate('ListPropertiesUser', {
                    // author:author
                })}>
                <Text style={styles.createPropertyButtonText}>Cancel</Text>
            </TouchableHighlight>
        </View> 
                    
                
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
    createPropertyButtonText: {
        color: color.White,
        textShadowColor: color.Black,
        textShadowRadius: 2,
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
      containerButtom: {
        width: Dimensions.get('screen').width * 0.8,
        paddingTop: 12,
        paddingBottom: 12,
        flex: 1,
        flexDirection: "row",   
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
      buttomText: {
        color: color.White,
        textShadowColor: color.Black,
        textShadowRadius: 2,
      },
});
export default DeleteProperties;	