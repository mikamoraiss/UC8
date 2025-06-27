import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RefInputFocus() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}> Cronômetro </Text>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>⏱️ {seconds} segundo(s)</Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity
          onPress={start}
          style={buttonStyle}
        >
          <Text style={buttonTextStyle}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={stop}
          style={buttonStyle}
        >
          <Text style={buttonTextStyle}>Parar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reset}
          style={buttonStyle}
        >
          <Text style={buttonTextStyle}>Resetar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const buttonStyle = {
  backgroundColor: '#e0e0e0',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 5,
  alignItems: 'center',
  minWidth: 70,
};

const buttonTextStyle = {
  fontWeight: 'bold',
};
