import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ContextTheme() {
  const { dark, toggleTheme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: dark ? '#222' : '#ddd',
        padding: 15,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Tema {dark ? 'Escuro' : 'Claro'}
      </Text>

      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          backgroundColor: '#e0e0e0',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: 'center',
          width: 150,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>MUDAR TEMA</Text>
      </TouchableOpacity>
    </View>
  );
}
