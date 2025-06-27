import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function StateCounter() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: 'center', marginVertical: 50 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}> Contador </Text>
      <Text>Cliques: {count}</Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{
          backgroundColor: '#e0e0e0',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: 'center',
          marginTop: 10,
          width: 150,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>CONTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
