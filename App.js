/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import NoteList from './src/components/NoteList'
import Nav from './src/navigation/Nav';
const App: () => React$Node = () => {
  return (
    <>
    
     <Nav/>
 
    </>
  );
};


export default App;
