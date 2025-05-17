
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../styles/colors';

const BASE_URL = 'https://taqwatrack-project-default-rtdb.firebaseio.com/';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill both fields');
      return;
    }

    try {
      const res = await axios.get(`${BASE_URL}/users.json`);
      const users = res.data || {};

      const userEntry = Object.entries(users).find(([_, u]) => u.email === email && u.password === password);

      if (userEntry) {
        const [key, user] = userEntry;
        await AsyncStorage.setItem('loggedInUser', JSON.stringify({ key, ...user }));

        Alert.alert('Login', `Login Successful! ${user.firstName} `);
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (err) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/header.png')} style={styles.headerImage} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#eee"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            placeholderTextColor="#eee"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#fff" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>

      <Image source={require('../assets/images/footer.png')} style={styles.footerImage} resizeMode="contain" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 24,
  },
  card: {
    backgroundColor: colors.primary,
    padding: 24,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: '#fff',
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '700',
  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.text,
    fontSize: 14,
  },
  headerImage: {
    width: '100%',
    height: 80,
    marginBottom: 10,
  },
  footerImage: {
    width: '100%',
    height: 80,
    marginTop: 30,
  },
});

export default LoginScreen;
