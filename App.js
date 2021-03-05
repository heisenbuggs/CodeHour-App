import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainComponent from './components/MainComponent';

const classes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default function App() {
  return (
    <View style={classes.container}>
      <MainComponent />
    </View>
  );
}
