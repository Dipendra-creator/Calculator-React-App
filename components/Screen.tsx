import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    text: string
}

export default function Screen(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        backgroundColor: '#22252d',
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
    }
});
