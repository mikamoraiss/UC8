import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function EffectColorChange() {
  const [color, setColor] = useState('green');

  useEffect(() => {
    console.log('Cor trocada:', color);
  }, [color]);

  return (
    <View style={{ alignItems: 'center', marginVertical: 10 }}>
      <Text style={{ fontSize: 18, color, fontWeight: 'bold' }}>Texto colorido</Text>

      <TouchableOpacity
        onPress={() => setColor(color === 'green' ? 'red' : 'green')}
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
        <Text style={{ fontWeight: 'bold' }}>MUDAR COR</Text>
      </TouchableOpacity>
    </View>
  );
}
