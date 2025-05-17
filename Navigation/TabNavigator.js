
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import TasbeehatScreen from '../screens/TasbeehatScreen';
import DailyAzkarScreen from '../screens/DailyAzkarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WeeklyScreen from '../screens/WeeklyScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Tasbeehat':
              iconName = focused ? 'rose' : 'rose-outline';
              break;
            case 'DailyAzkar':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'WeeklyReport':
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff8800',  // Orange active icon
        tabBarInactiveTintColor: 'gray',   // Gray inactive icon
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          paddingBottom: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasbeehat" component={TasbeehatScreen} />
      <Tab.Screen name="DailyAzkar" component={DailyAzkarScreen} />
      <Tab.Screen name="WeeklyReport" component={WeeklyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
