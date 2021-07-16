import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from "./Screen";
import Buttons from "./Buttons";

export default function Calculator() {
    return (
        <View style={styles.container}>
            <Screen />
            <Buttons />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22252d',
    },
});
