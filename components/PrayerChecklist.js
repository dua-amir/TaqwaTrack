

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getPrayerData, setPrayerData, updatePrayerStatus } from '../context/api';

const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const PrayerChecklist = () => {
  const [checked, setChecked] = useState({});
  const [loading, setLoading] = useState(true);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPrayerData(today);
      if (data) {
        setChecked(data); // Read
      } else {
        const newData = Object.fromEntries(prayers.map(p => [p, false]));
        await setPrayerData(today, newData); // Create
        setChecked(newData);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const togglePrayer = async (prayer) => {
    const updated = { ...checked, [prayer]: !checked[prayer] };
    setChecked(updated);
    await updatePrayerStatus(today, { [prayer]: updated[prayer] }); //Update
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
