import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import color from '../styles/colors';

function CreateUsers({ navigation }) {
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const createUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/adduser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userName,
                    last_name: userLastName, 
                    email: userEmail,
                    password: userPassword,                    
                }),
            });
            const json = await response.json();
            Alert.alert("User created successfuly");
            navigation.navigate('Login',{
                email: userEmail,
                password: userPassword
            });
        } catch (error) {
            Alert.alert("An error has ocurred: " + error);            
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerForm} >
                <TextInput style={styles.textInput} placeholder="Name" onChangeText={text => setUserName(text)} />
                <TextInput style={styles.textInput} placeholder="Last Name" onChangeText={text => setUserLastName(text)} />
                <TextInput style={styles.textInput} placeholder="Email" onChangeText={text => setUserEmail(text)} />
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={text => setUserPassword(text)} />
                <TouchableHighlight style={styles.createUserButton} onPress={createUser}>
                    <Text style={styles.textStyleButton}>Create User</Text>
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
    createUserButton: {
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

export default CreateUsers;