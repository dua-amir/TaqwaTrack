
// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../styles/colors'; 

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userData = await AsyncStorage.getItem('loggedInUser');
      setTimeout(() => {
        if (userData) {
          navigation.replace('MainTabs');
        } else {
          navigation.replace('Login');
        }
      }, 2000);
    };

    checkLoginStatus();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/loggo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color={colors.primary || '#6A0DAD'} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default SplashScreen;
