import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles'; 

const TasbeehatScreen = () => {
  // Expanded list of Tasbeehat with translations and initial counts set to 0
  const [tasbeehatList, setTasbeehatList] = useState([
    { id: '1', text: 'سُبْحَانَ ٱللَّهِ', translation: 'Glory is to Allah', count: 0 },
    { id: '2', text: 'ٱلْحَمْدُ لِلَّهِ', translation: 'All praise is due to Allah', count: 0 },
    { id: '3', text: 'ٱللَّهُ أَكْبَرُ', translation: 'Allah is the Greatest', count: 0 },
    { id: '4', text: 'لَآ إِلٰهَ إِلَّا ٱللَّهُ', translation: 'There is no god but Allah', count: 0 },
    { id: '5', text: 'أَسْتَغْفِرُ ٱللَّهَ رَبِّى مِنْ كُلِّ ذَنبٍ وَأَتُوبُ إِلَيْهِ', 
      translation: 'I ask forgiveness from Allah, my Lord, from all sins and turn to Him in repentance', count: 0 },
    { id: '6', text: 'بِسْمِ ٱللَّهِ', translation: 'In the name of Allah', count: 0 },
    { id: '7', text: 'حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ', translation: 'Allah is Sufficient for us, and He is the best disposer of affairs', count: 0 },
    { id: '8', text: 'رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةً وَفِى ٱلْءَاخِرَةِ حَسَنَةً', translation: 'Our Lord, give us good in this world and good in the Hereafter', count: 0 },
    { id: '9', text: 'سُبْحَٰنَ ٱللَّهِ وَبِحَمْدِهِ', translation: 'Glory is to Allah and with His praise', count: 0 },
    { id: '10', text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ', translation: 'There is no power and no strength except with Allah', count: 0 },
    { id: '11', text: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ', translation: 'Say, "He is Allah, [Who is] One', count: 0 },
    { id: '12', text: 'طَيِّبَٰت', translation: 'Good words and acts', count: 0 },
    { id: '13', text: 'جَزَٰكُمُ ٱللَّهُ خَيْرًا', translation: 'May Allah reward you with goodness', count: 0 },
    { id: '14', text: 'أَعُوذُ بِاللَّهِ مِنَ ٱلشَّيْطَٰنِ ٱلرَّجِيمِ', translation: 'I seek refuge with Allah from the accursed devil', count: 0 },
    { id: '15', text: 'ٱللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ', translation: 'O Allah, send blessings upon Muhammad', count: 0 },
  ]);

  // Function to increment the count of a specific Tasbeeh
  const incrementCount = (id) => {
    setTasbeehatList((prevList) =>
      prevList.map((tasbeeh) =>
        tasbeeh.id === id ? { ...tasbeeh, count: tasbeeh.count + 1 } : tasbeeh
      )
    );
  };

  // Function to reset the count of a specific Tasbeeh
  const resetCount = (id) => {
    setTasbeehatList((prevList) =>
      prevList.map((tasbeeh) =>
        tasbeeh.id === id ? { ...tasbeeh, count: 0 } : tasbeeh
      )
    );
  };

  // Function to reset all counts
  const resetAllCounts = () => {
    setTasbeehatList((prevList) =>
      prevList.map((tasbeeh) => ({ ...tasbeeh, count: 0 }))
    );
  };

  // Render each Tasbeeh with its translation and current count
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.arabicText}>{item.text}</Text>
        <TouchableOpacity onPress={() => resetCount(item.id)}>
          <Image source={require('../assets/images/reset-icon.png')} style={styles.resetIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.translation}>{item.translation}</Text>
      <Text style={styles.count}>Count: {item.count}</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => incrementCount(item.id)}>
        <Text style={globalStyles.buttonText}>Count</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerRow}>
        <Text style={globalStyles.header}>Tasbeehat Counter</Text>
        <TouchableOpacity onPress={resetAllCounts} style={styles.resetAllButton}>
          <Text style={styles.resetAllText}>Reset All</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions or description */}
      <Text style={globalStyles.centerText}>
        Click "Count" to count each Tasbeeh recitation.
      </Text>

      {/* Display list of Tasbeehat */}
      <FlatList
        data={tasbeehatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resetAllButton: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  resetAllText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arabicText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  translation: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  count: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  resetIcon: {
    width: 24,
    height: 24,
    tintColor: '#ff6347',
  },
});

export default TasbeehatScreen;
