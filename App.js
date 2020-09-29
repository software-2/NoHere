import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppLoading } from "expo";

import {
  useFonts,
  Roboto_400Regular,
  SecularOne_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    SecularOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headText}>Stop using @here</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'green'
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  headText: {
    textAlign: 'center',
    fontSize: 60,
    fontFamily: "SecularOne_400Regular"
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


export default App