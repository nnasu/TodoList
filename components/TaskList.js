import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => toggleTask(item.id)}>
          <Text style={item.done ? styles.done : styles.task}>{item.text}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    fontSize: 18,
    padding: 10,
  },
  done: {
    fontSize: 18,
    padding: 10,
    textDecorationLine: 'line-through',
  },
});

export default TaskList;