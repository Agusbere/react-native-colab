import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = ({ initial = 0 }) => {
  const [count, setCount] = useState(initial);

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{count}</Text>
      <View style={styles.row}>
        <Button title="+" onPress={() => setCount(c => c + 1)} />
        <Button title="-" onPress={() => setCount(c => c - 1)} />
        <Button title="Reset" onPress={() => setCount(initial)} />
        <Button title="x2" onPress={() => setCount(c => c * 2)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 12 },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1E40AF'
  },
  row: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between'
  },
});

export default Counter;
