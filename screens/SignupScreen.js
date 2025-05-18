/*
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { colors } from '../styles/colors';

const BASE_URL = 'https://taqwatrack-project-default-rtdb.firebaseio.com/';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const res = await axios.get(`${BASE_URL}/users.json`);
      const users = res.data || {};
      const emailExists = Object.values(users).some(user => user.email === email);

      if (emailExists) {
        Alert.alert('Error', 'Email already exists.');
        return;
      }

      await axios.post(`${BASE_URL}/users.json`, {
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'Account created!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Signup Error', 'Something went wrong.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Image
          source={require('../assets/images/header.png')}
          style={styles.headerFooter}
          resizeMode="cover"
        />

        <Text style={styles.title}>Create Account</Text>

        <View style={styles.card}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />
          
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/images/footer.png')}
          style={styles.headerFooter}
          resizeMode="cover"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerFooter: {
    width: '100%',
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: colors.primary,
  },
  card: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 12,
    width: '100%',
    elevation: 5,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 12,
  },
});

export default SignupScreen;
*/

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../styles/colors';

const BASE_URL = 'https://taqwatrack-project-default-rtdb.firebaseio.com/';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const res = await axios.get(`${BASE_URL}/users.json`);
      const users = res.data || {};
      const emailExists = Object.values(users).some(user => user.email === email);

      if (emailExists) {
        Alert.alert('Error', 'Email already exists.');
        return;
      }

      await axios.post(`${BASE_URL}/users.json`, {
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'Account created!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Signup Error', 'Something went wrong.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require('../assets/images/header.png')}
          style={styles.headerFooter}
          resizeMode="cover"
        />

        <Text style={styles.title}>Create Account</Text>

        <View style={styles.card}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          {/* Password Field */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color={colors.primary}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Field */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Icon
                name={showConfirmPassword ? 'eye-off' : 'eye'}
                size={24}
                color={colors.primary}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/images/footer.png')}
          style={styles.headerFooter}
          resizeMode="cover"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerFooter: {
    width: '100%',
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: colors.primary,
  },
  card: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 12,
    width: '100%',
    elevation: 5,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 12,
  },
});

export default SignupScreen;
