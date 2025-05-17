/*
import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';

const BASE_URL = 'https://taqwatrack-project-default-rtdb.firebaseio.com/';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('loggedInUser');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);

          // Map Firebase 'key' to 'key' for consistent use
          if (!parsedUser.key && parsedUser.id) {
            parsedUser.key = parsedUser.id;
          }

          setUser(parsedUser);
          setFirstName(parsedUser.firstName);
          setLastName(parsedUser.lastName);
        } else {
          Alert.alert('Error', 'No user data found. Please log in again.');
          navigation.replace('Login');
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to load user info.');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('loggedInUser');
      navigation.replace('Login');
    } catch (err) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  const handleSave = async () => {
    if (!user?.key) {
      Alert.alert('Error', 'User ID is missing, cannot update profile.');
      console.warn('Missing user key:', user);
      return;
    }

    try {
      const updatedUser = {
        ...user,
        firstName,
        lastName,
      };

      await AsyncStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
      setUser(updatedUser);

      // Update Firebase realtime database using the 'key' as user ID
      const response = await fetch(`${BASE_URL}/users/${user.key}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile in database');
      }

      Alert.alert('Success', 'Profile updated!');
      setEditing(false);
    } catch (err) {
      Alert.alert('Error', 'Failed to update profile.');
      console.error(err);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  const formattedDate = new Date(user.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome, {user.firstName}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>First Name</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        ) : (
          <Text style={styles.value}>{user.firstName}</Text>
        )}

        <Text style={styles.label}>Last Name</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        ) : (
          <Text style={styles.value}>{user.lastName}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Account Created</Text>
        <Text style={styles.value}>{formattedDate}</Text>
      </View>

      {editing ? (
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setEditing(true)} style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingText: {
    fontSize: 18,
    color: colors.text,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 15,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
    marginTop: 4,
  },
  input: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    marginTop: 4,
  },
  editButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  editText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  logoutText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
*/

import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, TextInput, Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';

const BASE_URL = 'https://taqwatrack-project-default-rtdb.firebaseio.com/';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('loggedInUser');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);

          if (!parsedUser.key && parsedUser.id) {
            parsedUser.key = parsedUser.id;
          }

          setUser(parsedUser);
          setFirstName(parsedUser.firstName);
          setLastName(parsedUser.lastName);
        } else {
          Alert.alert('Error', 'No user data found. Please log in again.');
          navigation.replace('Login');
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to load user info.');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('loggedInUser');
      navigation.replace('Login');
    } catch (err) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  const handleSave = async () => {
    if (!user?.key) {
      Alert.alert('Error', 'User ID is missing, cannot update profile.');
      console.warn('Missing user key:', user);
      return;
    }

    try {
      const updatedUser = {
        ...user,
        firstName,
        lastName,
      };

      await AsyncStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
      setUser(updatedUser);

      const response = await fetch(`${BASE_URL}/users/${user.key}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile in database');
      }

      Alert.alert('Success', 'Profile updated!');
      setEditing(false);
    } catch (err) {
      Alert.alert('Error', 'Failed to update profile.');
      console.error(err);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  const formattedDate = new Date(user.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Welcome! {user.firstName}</Text>
      <Text style={styles.subtitle}>Nurture your soul with mindful moments.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>First Name</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        ) : (
          <Text style={styles.value}>{user.firstName}</Text>
        )}

        <Text style={styles.label}>Last Name</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        ) : (
          <Text style={styles.value}>{user.lastName}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Account Created</Text>
        <Text style={styles.value}>{formattedDate}</Text>
      </View>

      {editing ? (
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setEditing(true)} style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingText: {
    fontSize: 18,
    color: colors.text,
  },
  headerImage: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 15,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
    marginTop: 4,
  },
  input: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    marginTop: 4,
  },
  editButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  editText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  logoutText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
