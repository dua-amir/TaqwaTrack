import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const DailyAzkarScreen = () => {
  const [azkarList, setAzkarList] = useState([
    { id: '1', text: 'اللّهُـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ', translation: 'O Allah, You are my Lord, there is no deity but You', count: 0 },
    { id: '2', text: 'اللّهُـمَّ عافِـني في بَدَنـي', translation: 'O Allah, grant my body health', count: 0 },
    { id: '3', text: 'اللّهُـمَّ إِنِّـي أَسْأَلُـكَ العَفْوَ وَالعَافِـيَةَ', translation: 'O Allah, I ask You for forgiveness and well-being', count: 0 },
    {
      id: '4',
      text: 'سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ، سُبْحَانَ اللّٰهِ الْعَظِيمِ',
      translation: 'Glory is to Allah, and with His praise, glory is to Allah the Almighty',
      count: 0,
    },
    {
      id: '5',
      text: 'بِسْمِ اللّٰهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ',
      translation: 'In the name of Allah, with whose name nothing on earth or in heaven can harm',
      count: 0,
    },
    {
      id: '6',
      text: 'أَعُوذُ بِكَلِمَاتِ اللّٰهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created',
      count: 0,
    },
    {
      id: '7',
      text: 'حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ',
      translation: 'Allah is Sufficient for us, and He is the best disposer of affairs',
      count: 0,
    },
    {
      id: '8',
      text: 'إِنَّ اللّٰهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ',
      translation: 'Indeed, Allah and His angels send blessings upon the Prophet',
      count: 0,
    },
    {
      id: '9',
      text: 'رَبِّ اغْفِرْ لِي',
      translation: 'My Lord, forgive me',
      count: 0,
    },
    {
      id: '10',
      text: 'اللّٰهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
      translation: 'O Allah, I ask You for beneficial knowledge, good sustenance, and accepted deeds',
      count: 0,
    },
    {
      id: '11',
      text: 'يَا حَيُّ يَا قَيُّومُ',
      translation: 'O Living, O Sustainer',
      count: 0,
    },
    {
      id: '12',
      text: 'لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ',
      translation: 'There is no god but Allah, alone without partner. His is the dominion and all praise',
      count: 0,
    },
  ]);

  const incrementCount = (id) => {
    setAzkarList((prevList) =>
      prevList.map((azkar) =>
        azkar.id === id ? { ...azkar, count: azkar.count + 1 } : azkar
      )
    );
  };

  const resetCount = (id) => {
    setAzkarList((prevList) =>
      prevList.map((azkar) =>
        azkar.id === id ? { ...azkar, count: 0 } : azkar
      )
    );
  };

  const resetAllCounts = () => {
    setAzkarList((prevList) =>
      prevList.map((azkar) => ({ ...azkar, count: 0 }))
    );
  };

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
        <Text style={globalStyles.header}> 📿 Daily Azkar</Text>
        <TouchableOpacity onPress={resetAllCounts} style={styles.resetAllButton}>
          <Text style={styles.resetAllText}>Reset All</Text>
        </TouchableOpacity>
      </View>
      <Text style={globalStyles.centerText}>
        Tap "Count" each time you recite an Azkar.
      </Text>
      <FlatList
        data={azkarList}
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
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

export default DailyAzkarScreen;
