/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons'; // Install this if not yet: expo install @expo/vector-icons

const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const PrayerChecklist = () => {
  const [checked, setChecked] = useState({});

  const toggleCheck = (prayer) => {
    setChecked((prev) => ({ ...prev, [prayer]: !prev[prayer] }));
  };

  return (
    <View>
      
      {prayers.map((prayer) => (
        <TouchableOpacity
          key={prayer}
          style={[styles.prayerRow, checked[prayer] && styles.checkedPrayer]}
          onPress={() => toggleCheck(prayer)}
        >
          <Ionicons
            name={checked[prayer] ? 'checkbox' : 'square-outline'}
            size={24}
            color={checked[prayer] ? '#6C4AB6' : '#888'}
          />
          <Text style={styles.prayerText}>{prayer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  prayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  checkedPrayer: {
    backgroundColor: '#F0E8FF',
  },
  prayerText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default PrayerChecklist;
*/

/*
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api'; // Your configured Axios instance

const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const PrayerChecklist = () => {
  const [checked, setChecked] = useState({});
  const [loading, setLoading] = useState(true);
  const recordId = 'userPrayers'; // Assume single record for simplicity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/prayers/${recordId}.json`);
        if (res.data) {
          setChecked(res.data);
        } else {
          // Initialize empty record if not found
          const initial = Object.fromEntries(prayers.map(p => [p, false]));
          await api.put(`/prayers/${recordId}.json`, initial);
          setChecked(initial);
        }
      } catch (error) {
        console.error('Error loading prayer data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleCheck = async (prayer) => {
    const updated = { ...checked, [prayer]: !checked[prayer] };
    setChecked(updated);

    try {
      await api.patch(`/prayers/${recordId}.json`, { [prayer]: updated[prayer] });
    } catch (error) {
      console.error('Error updating prayer status:', error);
    }
  };

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View>
      {prayers.map((prayer) => (
        <TouchableOpacity
          key={prayer}
          style={[styles.prayerRow, checked[prayer] && styles.checkedPrayer]}
          onPress={() => toggleCheck(prayer)}
        >
          <Ionicons
            name={checked[prayer] ? 'checkbox' : 'square-outline'}
            size={24}
            color={checked[prayer] ? '#6C4AB6' : '#888'}
          />
          <Text style={styles.prayerText}>{prayer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  prayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  checkedPrayer: {
    backgroundColor: '#EFE2FF',
  },
  prayerText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default PrayerChecklist;
*/

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getPrayerData, setPrayerData, updatePrayerStatus } from '../api';

const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const PrayerChecklist = () => {
  const [checked, setChecked] = useState({});
  const [loading, setLoading] = useState(true);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPrayerData(today);
      if (data) {
        setChecked(data); // ✅ Read
      } else {
        const newData = Object.fromEntries(prayers.map(p => [p, false]));
        await setPrayerData(today, newData); // ✅ Create
        setChecked(newData);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const togglePrayer = async (prayer) => {
    const updated = { ...checked, [prayer]: !checked[prayer] };
    setChecked(updated);
    await updatePrayerStatus(today, { [prayer]: updated[prayer] }); // ✅ Update
  };

  if (loading) return <ActivityIndicator size="large" color="#6C4AB6" />;

  return (
    <View style={styles.container}>
      {prayers.map((prayer) => (
        <TouchableOpacity key={prayer} style={styles.item} onPress={() => togglePrayer(prayer)}>
          <Ionicons name={checked[prayer] ? "checkbox" : "square-outline"} size={24} color="#6C4AB6" />
          <Text style={styles.text}>{prayer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333'
  }
});

export default PrayerChecklist;
