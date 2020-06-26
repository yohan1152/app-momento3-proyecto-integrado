import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textScreen}>Login Screen</Text>
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textScreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default LoginScreen;
