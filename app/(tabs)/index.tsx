import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import StateCounter from '../components/useState';
import EffectColorChange from '../components/useEffect';
import CallbackExample from '../components/useCallback';
import RefInputFocus from '../components/useRef';
import ContextTheme from '../components/useContext';
import { ThemeProvider } from '../context/ThemeContext';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggle = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ThemeProvider>
      <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#a3bbae', flexGrow: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          Selecione um Hook:
        </Text>

        {/* Botão + Exemplo useState */}
        <TouchableOpacity onPress={() => toggle('state')} style={styles.button}>
          <Ionicons name="finger-print-outline" size={24} color="#444" />
          <Text>useState</Text>
        </TouchableOpacity>
        {expanded.state && <StateCounter />}

        {/* Botão + Exemplo useEffect */}
        <TouchableOpacity onPress={() => toggle('effect')} style={styles.button}>
          <Ionicons name="color-palette-outline" size={24} color="#444" />
          <Text>useEffect</Text>
        </TouchableOpacity>
        {expanded.effect && <EffectColorChange />}

        {/* Botão + Exemplo useCallback */}
        <TouchableOpacity onPress={() => toggle('callback')} style={styles.button}>
          <Ionicons name="clipboard-outline" size={24} color="#444" />
          <Text>useCallback</Text>
        </TouchableOpacity>
        {expanded.callback && <CallbackExample />}

        {/* Botão + Exemplo useRef */}
        <TouchableOpacity onPress={() => toggle('ref')} style={styles.button}>
          <Ionicons name="stopwatch-outline" size={24} color="#444" />
          <Text>useRef</Text>
        </TouchableOpacity>
        {expanded.ref && <RefInputFocus />}

        {/* Botão + Exemplo useContext */}
        <TouchableOpacity onPress={() => toggle('context')} style={styles.button}>
          <Ionicons name="color-wand-outline" size={24} color="#444" />
          <Text>useContext</Text>
        </TouchableOpacity>
        {expanded.context && <ContextTheme />}
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = {
  button: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: 10,
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 5,
  },
};
