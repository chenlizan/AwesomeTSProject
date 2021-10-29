import React from 'react';
import {Provider} from '@ant-design/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../view/Home/screen/HomeScreen';
import MessageScreen from '../view/Message/screen/MessageScreen';
import MineScreen from '../view/Mine/screen/MineScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="首页"
      component={HomeScreen}
      options={() => ({
        tabBarIcon: ({color, size}) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="消息"
      component={MessageScreen}
      options={() => ({
        tabBarIcon: ({color, size}) => (
          <AntDesign name="message1" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="我的"
      component={MineScreen}
      options={() => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="user" color={color} size={size} />
        ),
      })}
    />
  </Tab.Navigator>
);

export default (
  <Provider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="root"
          component={Root}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
