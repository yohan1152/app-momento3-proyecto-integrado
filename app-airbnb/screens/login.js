import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Alert, FlatList} from 'react-native';
import { TouchableHighlight,  TextInput } from "react-native-gesture-handler";

function Login({ navigation }) {
  const [email, setEmail] = useState("");    
  const [password, setPassword] = useState("");

  const getUser = async () => {

        const url = "http://localhost:3000/api/getuser"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
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
  }
  
  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>
        <Text style={styles.logoText}>Air BnB</Text>
        <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginTextInput} onChangeText={text => setEmail(text)}/>
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
