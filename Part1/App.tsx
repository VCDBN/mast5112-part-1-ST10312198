import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [lastBook, setLastBook] = useState({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    pages: 218,
  });

  const totalPagesRead = 1234;
  const averagePagesPerBook = 300;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Book App</Text>
      <View style={styles.bookInfo}>
        <Text>Last Book Read:</Text>
        <Text>Title: {lastBook.title}</Text>
        <Text>Author: {lastBook.author}</Text>
        <Text>Genre: {lastBook.genre}</Text>
        <Text>Pages: {lastBook.pages}</Text>
      </View>
      <View style={styles.summary}>
        <Text>Total Pages Read: {totalPagesRead}</Text>
        <Text>Average Pages per Book: {averagePagesPerBook}</Text>
      </View>
      <Button title="Add Book" onPress={() => console.log('Add Book button pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookInfo: {
    marginBottom: 20,
  },
  summary: {
    marginTop: 20,
  },
});

//-----Code attribution-----//
//(React Native Tutorial #3 - Designing Home Screen)//
//Available at: (https://youtu.be/n6-G3O3_FvA?si=UMVrvaGmbyopFU9j)//
//Accessed on:(11 September2023)//
