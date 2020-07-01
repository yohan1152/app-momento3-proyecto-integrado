import React, { useState } from "react";
import {Image} from 'react-native';
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native';
import { TouchableHighlight,  TextInput } from "react-native-gesture-handler";
import color from '../styles/colors';

function Login({ navigation }) {
  const [username, setUsername] = useState("");    
  const [password, setPassword] = useState("");
  const getUser = async () => {
    
    try {
        const url = "http://localhost:3000/api/getuser"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        let json = await response.json();  
        console.log('json name', json.res.data[0].name );
                
        if(json.res.success){
          navigation.navigate('ListPropertiesUser',{
            author: json.res.data[0]._id,
            name: json.res.data[0].name
          });
        }else{
          Alert.alert("Authentication Error",json.response);
        }
    } catch (error) {
        Alert.alert("An error has ocurred: " + error);            
    }
}
  
  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>
        <Image style={styles.image} source={require('../assets/icon.png')}></Image>
        <TextInput placeholder="Username" style={styles.loginTextInput} onChangeText={text => setUsername(text)}/>
        <TextInput placeholder="Password" style={styles.loginTextInput} secureTextEntry={true} onChangeText={text => setPassword(text)} />
        <TouchableHighlight style={styles.buttom} onPress={getUser}>
          <Text style={styles.buttomText}>Sign in</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttom} onPress={()=>navigation.navigate('CreateUsers')}>
          <Text style={styles.buttomText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: color.Black,
    alignItems: 'center',
  },
  loginFormView: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '60%',
    backgroundColor: color.Gray,
    borderRadius: 10,
  },
  image:{
    height: 200,
    width: 200,
  },
  loginTextInput: {
    color: color.White,
    borderColor: color.Black,
    backgroundColor: color.Gray,
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    width: Dimensions.get('screen').width * 0.50,
    fontSize: 14,
    padding: 10,
    margin: 5,
  },
  buttom: {
    backgroundColor: color.AquaMarine,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 4,
    padding: 4,
    width: Dimensions.get('screen').width * 0.30,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: color.Black,
    borderWidth: 2,
  },
  buttomText: {
    color: color.White,
    textShadowColor: color.Black,
    textShadowRadius: 2,
    fontSize: 16,
  },
});

export default Login;
