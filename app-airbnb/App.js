import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import ListProperties from './screens/list-properties';
import ListPropertiesUser from './screens/list-properties-user';
import CreateProperties from './screens/create-properties';
import UpdateProperties from './screens/update-properties';
import CancelProperties from './screens/cancel-appointment';
import CreateUsers from './screens/create-users';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="ListProperties" component={ListProperties} options={{ title: 'Properties' }} /> */}
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="ListPropertiesUser" component={ListPropertiesUser} options={{ title: 'My Properties' }} />
        <Stack.Screen name="CreateProperties" component={CreateProperties} options={{ title: 'Create Property' }} />
        <Stack.Screen name="UpdateProperties" component={UpdateProperties} options={{ title: 'Update Property' }} />
        <Stack.Screen name="CancelProperties" component={CancelProperties} options={{ title: 'Cancel Property' }} />
        <Stack.Screen name="CreateUsers" component={CreateUsers} options={{ title: 'Users Registration' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


