import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text style={{color: '#fff'}}>Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        backgroundColor: '#22252d',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
