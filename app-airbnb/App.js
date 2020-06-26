import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Screens
import LoginScreen from './screens/LoginScreen';
import DetailScreen from './screens/DetailScreen';
import NewScreen from './screens/NewScreen';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: LoginScreen,
      Drawer: createDrawerNavigator({
        Home: createStackNavigator(
          {
            Tab: createBottomTabNavigator({
              Tab1: Tab1Screen,
              Tab2: Tab2Screen
            }),
            Detail: DetailScreen
          },
          {
            defaultNavigationOptions: {
              title: 'Welcome to Home Screen!'
            }
          }
        ),
        Drawer: NewScreen
      })
    },
    {
      initialRouteName: 'Auth'
    }
  )
);
