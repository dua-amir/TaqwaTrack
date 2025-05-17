/*
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { LineChart } from 'react-native-chart-kit'; // Import LineChart

const WeeklyScreen = () => {
  const [weeklyData, setWeeklyData] = useState({
    prayersCompleted: 0,
    tasbeehatCompleted: 0,
    duasRead: 0,
  });

  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0]); // 7-day progress data

  useEffect(() => {
    // Simulate fetching weekly data (In real use case, fetch from Firebase or DB)
    const fetchData = () => {
      setWeeklyData({
        prayersCompleted: 22, // Example: user completed 22 prayers in the week
        tasbeehatCompleted: 5, // Example: user completed 5 tasbeehat sessions
        duasRead: 7, // Example: user read 7 duas this week
      });

      // Simulate weekly progress (e.g., data for each day of the week)
      setChartData([1, 2, 3, 4, 5, 6, 7]); // Example: Update with actual data
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[globalStyles.header, { textAlign: 'center' }]}>
        Weekly Progress
      </Text>

      <View style={styles.card}>
        <Text style={styles.progressText}>
          ✅ Prayers Completed: {weeklyData.prayersCompleted}
        </Text>
        <Text style={styles.progressText}>
          ✅ Tasbeehat Completed: {weeklyData.tasbeehatCompleted}
        </Text>
        <Text style={styles.progressText}>✅ Duas Read: {weeklyData.duasRead}</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Progress Chart</Text>

        <LineChart
          data={{
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Days of the week
            datasets: [
              {
                data: chartData, // Weekly progress data
                strokeWidth: 2, // Line thickness
              },
            ],
          }}
          width={350} // Set chart width
          height={220} // Set chart height
          yAxisLabel="" // Empty label for y-axis
          yAxisSuffix="%" // Percentage or units if necessary
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#E4E4E4',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0, // No decimals
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    elevation: 3,
  },
  progressText: {
    fontSize: 18,
    marginBottom: 8,
  },
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default WeeklyScreen;
*/

/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { getPrayerData, deleteWeeklyData } from '../api';
import { colors } from '../styles/colors';

const WeeklyScreen = () => {
  const [chartData, setChartData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const iso = date.toISOString().split('T')[0];
      days.push(iso);
    }
    return days;
  };

  const fetchWeekly = async () => {
    const past7 = getPast7Days();
    const counts = [], labelList = [];

    for (let date of past7) {
      const data = await getPrayerData(date);
      counts.push(data ? Object.values(data).filter(v => v).length : 0);
      labelList.push(date.slice(5));
    }

    setChartData(counts);
    setLabels(labelList);
    setLoading(false);
  };

  useEffect(() => {
    fetchWeekly();
  }, []);

  const handleDelete = async () => {
    await deleteWeeklyData(); // ✅ Delete
    await fetchWeekly(); // Refresh UI
  };

  if (loading) return <ActivityIndicator size="large" color={colors.primary} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Prayer Completion</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [{ data: chartData }]
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => '#6C4AB6',
          strokeWidth: 2,
        }}
        style={{ borderRadius: 16 }}
      />
      <Button title="Reset Weekly Data" color={colors.primary} onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default WeeklyScreen;
*/

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { getPrayerData, deleteWeeklyData } from '../context/api';
import { colors } from '../styles/colors';

const WeeklyScreen = () => {
  const [chartData, setChartData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalPrayers, setTotalPrayers] = useState(0);

  const getPast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const iso = date.toISOString().split('T')[0];
      days.push(iso);
    }
    return days;
  };

  const fetchWeekly = async () => {
    const past7 = getPast7Days();
    const counts = [];
    const labelList = [];
    let completed = 0;
    let total = 0;

    for (let date of past7) {
      const data = await getPrayerData(date);
      const prayers = data ? Object.values(data) : [];
      const done = prayers.filter(v => v).length;

      completed += done;
      total += prayers.length || 5;

      counts.push(done);
      labelList.push(date.slice(5));
    }

    setChartData(counts);
    setLabels(labelList);
    setTotalCompleted(completed);
    setTotalPrayers(total);
    setLoading(false);
  };

  useEffect(() => {
    fetchWeekly();
  }, []);

  const handleDelete = async () => {
    await deleteWeeklyData();
    await fetchWeekly();
  };

  if (loading) 
    return <ActivityIndicator size="large" color={colors.primary} style={{ flex: 1, justifyContent: 'center' }} />;

  return (
    <View style={styles.container}>

      {/* Floating Heading outside card */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>🕌 Weekly Prayer Tracker</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.statsText}>
          You’ve completed <Text style={styles.highlight}>{totalCompleted}</Text> out of{' '}
          <Text style={styles.highlight}>{totalPrayers}</Text> prayers this week.
        </Text>
        <Text style={styles.motivation}>
          "Every step you take toward prayer is a step closer to peace 🌙"
        </Text>

        <LineChart
          data={{
            labels: labels,
            datasets: [{ data: chartData }]
          }}
          width={Dimensions.get('window').width - 80}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: () => colors.primary,
            strokeWidth: 2,
          }}
          style={styles.chart}
        />
      </View>

      {/* Floating Reset button outside card */}
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Reset Weekly Data</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
    alignItems: 'center',
  },
  headingContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
    // subtle shadow for the heading container
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: colors.primary,
    borderWidth:1,
    borderRadius: 20,
    padding: 22,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  statsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    color: '#555',
  },
  highlight: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  motivation: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 22,
    color: '#6C757D',
  },
  chart: {
    borderRadius: 16,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
    // shadow for button
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 7,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default WeeklyScreen;
