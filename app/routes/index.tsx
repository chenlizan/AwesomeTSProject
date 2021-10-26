import React from 'react';
import {Provider} from '@ant-design/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../view/Demo/HomeScreen';
import SettingsScreen from '../view/Demo/SettingsScreen';

const Tab = createBottomTabNavigator();

export default (
  <Provider>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);
