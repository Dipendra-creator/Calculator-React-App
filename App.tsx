import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from "./components/Calculator";
// import {Constants} from "react-native-unimodules";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
