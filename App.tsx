import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');
  const [lowerLimit, setLowerLimit] = useState<number>(0);
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const handleAgeChange = (text: string) => {
    setAge(text);

    // Check if input is numeric
    const parsedAge = parseInt(text);
    if (!isNaN(parsedAge) && parsedAge >= 0 && parsedAge <= 120) {
      const lower = (220 - parsedAge) * 0.65;
      const upper = (220 - parsedAge) * 0.85;
      setLowerLimit(lower);
      setUpperLimit(upper);
    } else {
      setLowerLimit(0);
      setUpperLimit(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.label}>Enter your age:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={handleAgeChange}
        placeholder="Enter age"
        maxLength={3}
      />

      <Text style={styles.result}>
        Lower limit: {lowerLimit.toFixed(0)} bpm
      </Text>
      <Text style={styles.result}>
        Upper limit: {upperLimit.toFixed(0)} bpm
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    width: '60%',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 5,
  },
});
