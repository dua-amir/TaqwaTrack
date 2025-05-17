/*
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="MainTabs" component={TabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
*/

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
