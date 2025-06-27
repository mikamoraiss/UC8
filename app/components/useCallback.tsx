import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

function TaskItem({ task }: { task: string }) {
  return <Text style={{ padding: 5 }}>🔹 {task}</Text>;
}

export default function Callback() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = useCallback(() => {
    if (input.trim() !== '') {
      setTasks(prev => [...prev, input]);
      setInput('');
    }
  }, [input]);

  return (
    <View style={{ alignItems: 'center', marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}> Lista de tarefas</Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Nova tarefa"
        style={{
          borderWidth: 1,
          width: 200,
          padding: 8,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <TouchableOpacity
        onPress={addTask}
        style={{
          backgroundColor: '#e0e0e0', // cinza claro 2
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: 'center',
          width: 200,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>ADICIONAR</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <TaskItem task={item} />}
        style={{ marginTop: 15, width: '80%' }}
      />
    </View>
  );
}
