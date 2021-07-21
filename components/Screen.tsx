import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    text: string
    ans: string
}

export default function Screen(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>{props.ans}</Text>
            <Text style={styles.buttonText}>{props.text}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 20,
        paddingBottom: 5,
        flexDirection: "column-reverse",
        flex: 0.8,
        backgroundColor: '#22252d',
    },
    buttonText: {
        textAlign: "right",
        fontSize: 40,
        color: '#fff',
    }
});
