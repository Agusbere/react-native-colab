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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 12 },
  value: { fontSize: 32, fontWeight: '700', marginBottom: 8 },
  row: { flexDirection: 'row', width: 220, justifyContent: 'space-between' },
});

export default Counter;