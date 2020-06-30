import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native';
import { TouchableHighlight,  TextInput } from "react-native-gesture-handler";

function Login({ navigation }) {
  const [username, setUsername] = useState("");    
  const [password, setPassword] = useState("");
  const getUser = async () => {
    
    try {
        const url = "http://192.168.0.3:3000/api/validateuser"
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
        const json = await response.json();        
        if(json.user){
          navigation.navigate('ListProperties',{
            userid: json.user._id
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
        <Text style={styles.logoText}>Air BnB</Text>
        <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginTextInput} onChangeText={text => setUsername(text)}/>
        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginTextInput} secureTextEntry={true} onChangeText={text => setPassword(text)} />
        <TouchableHighlight style={styles.loginButton} onPress={getUser}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.registerButton} onPress={()=>navigation.navigate('CreateUsers')}>
          <Text style={styles.registerButtonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    fontSize: 16,
    borderRadius: 5,
    height: 45,
    margin: 15,
    padding: 10,
    width: Dimensions.get('screen').width * 0.93,
    alignItems: 'center'
  },
  loginButtonText: {
    color: 'white'
  },
  registerButton: {
    fontSize: 20,    
    alignItems: 'center'
  },
  registerButtonText: {
    color: '#01579b'
  }

});

export default Login;
