import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  ImageBackground, StatusBar, Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { globalStyles } from '../styles/globalStyles';
import { getTodayHijriDate, getTodayGregorianDate } from '../utils/dateUtils';
import { fetchDailyDua } from '../utils/duaUtils';
import { getNextPrayer } from '../utils/prayerUtils';
import PrayerChecklist from '../components/PrayerChecklist';
import InfoCard from '../components/InfoCard';
import { colors } from '../styles/colors';

const HomeScreen = () => {
  const [gregorianDate, setGregorianDate] = useState('');
  const [hijriDate, setHijriDate] = useState('');
  const [dailyDua, setDailyDua] = useState({ title: '', arabic: '', translation: '' });
  const [nextPrayer, setNextPrayer] = useState('');
  const [userName, setUserName] = useState('Dua');

  const navigation = useNavigation();

  const loadData = async () => {
    try {
      const userData = await AsyncStorage.getItem('loggedInUser');
      if (userData) {
        const user = JSON.parse(userData);
        setUserName(user.firstName || 'Dua');
      }
    } catch (err) {
      console.warn('Failed to load user info:', err);
    }

    setGregorianDate(getTodayGregorianDate());
    setHijriDate(getTodayHijriDate());
    setDailyDua(fetchDailyDua());
    setNextPrayer(getNextPrayer());
  };

  // Refresh screen when it comes into focus
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <ScrollView style={[globalStyles.container, { backgroundColor: '#F8F6FA' }]} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#6C4AB6" />

      {/* Header with logo and greeting */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
        <Text style={[globalStyles.header, { fontSize: 22, flex: 1 }]}>
          Blessings to you, {userName}
        </Text>
        <Image
          source={require('../assets/images/loggo.png')} 
          style={{ width: 40, height: 40, borderRadius: 20, borderWidth:1, borderColor: colors.primary, marginRight: 10 }}
        />
      </View>

      {/* Date & Prayer Card */}
      <ImageBackground
        source={require('../assets/images/date--bg.jpg')}
        style={{
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
          backgroundColor: '#6C4AB6',
          elevation: 3,
          width: 325,
          height: 200, 
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageStyle={{
          borderRadius: 25,
          resizeMode: 'stretch',
        }}
      >
        <Text style={[globalStyles.centerText, 
          { 
            position: 'absolute',
            top: 15,
            left: 20,
            color: 'black',
            fontSize: 16,
            textAlign: 'left', 
          }]}>
          📅 {gregorianDate}
        </Text>
        <Text style={[globalStyles.centerText, 
          { 
            position: 'absolute',
            top: 40,
            left: 20,
            color: 'black',
            fontSize: 16,
            textAlign: 'left', 
          }]}>
          🕌 {hijriDate}
        </Text>
        <Text style={[globalStyles.centerText, 
          { 
            position: 'absolute',
            bottom: 5,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
          }]}>
          🕰 Next Prayer: {nextPrayer}
        </Text>
      </ImageBackground>

      {/* Ayah Section */}
      <Text style={globalStyles.sectionTitle}>📖 Ayah of the Moment</Text>
      <InfoCard
        title=""
        content={dailyDua.arabic}
        translation={dailyDua.translation}
      />

      {/* Azkar Buttons */}
      <Text style={globalStyles.sectionTitle}>🤲 Azkar</Text>
      <View style={globalStyles.cardRow}>
        <TouchableOpacity
          style={[globalStyles.cardButton, { backgroundColor: '#FFD6EC' }]}
          onPress={() => navigation.navigate('Tasbeehat')}
        >
          <Text style={[globalStyles.cardText, { color: '#6C4AB6' }]}>🧿 Tasbeehat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.cardButton, { backgroundColor: '#D7F2FF' }]}
          onPress={() => navigation.navigate('DailyAzkar')}
        >
          <Text style={[globalStyles.cardText, { color: '#6C4AB6' }]}>📿 Daily Azkar</Text>
        </TouchableOpacity>
      </View>

      {/* Salah Checklist */}
      <Text style={globalStyles.sectionTitle}>🗓 Today’s Salah Checklist</Text>
      <View style={{ marginBottom: 40 }}>
        <PrayerChecklist />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;