import React from 'react';
import {image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import ListProperties from './screens/list-properties';
import ListPropertiesUser from './screens/list-properties-user';
import CreateProperties from './screens/create-properties';
import UpdateProperties from './screens/update-properties';
import CancelProperties from './screens/cancel-appointment';
import CreateUsers from './screens/create-users';
import color from './styles/colors';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListProperties" component={ListProperties} options={{ title: 'AIR BnB - Avaible Properties ', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}}  />
        <Stack.Screen name="Login" component={Login} options={{ title: 'AIR BnB - Login ', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}}  />
        <Stack.Screen name="ListPropertiesUser" component={ListPropertiesUser} options={{ title: 'AIR BnB - My Properties ', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="CreateProperties" component={CreateProperties} options={{ title: 'AIR BnB - Create properties', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}}  />
        <Stack.Screen name="UpdateProperties" component={UpdateProperties} options={{ title: 'AIR BnB - Update properties', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="CancelProperties" component={CancelProperties} options={{ title: 'AIR BnB - Delete', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="CreateUsers" component={CreateUsers} options={{ title: 'AIR BnB - Create user', headerStyle:{backgroundColor: '#272727'}, 
        headerTintColor: color.AquaMarine, headerTitleStyle: {fontWeight: 'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


