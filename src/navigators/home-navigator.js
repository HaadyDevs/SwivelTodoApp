import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodosScreen from '../screens/todos';
import FloorPlanScreen from '../screens/floor-plan';
import ProfileScreen from '../screens/profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  PRIMARY,
  RED_TEXT,
} from '../styles/colors';

const HomeTab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    // Tab Navigator Setup for Home screen
    <HomeTab.Navigator 
      screenOptions={{
        tabBarStyle: {
          height: 60,
          padding: 10,
        },
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: GRAY_MEDIUM,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Poppins-SemiBold',
        },
      }}>
      <HomeTab.Screen
        name="To Do"
        component={TodosScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={30} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Floor Plan"
        component={FloorPlanScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="domain" color={color} size={30} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={30} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}
