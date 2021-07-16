import React from 'react';
import {Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';

interface Props {
    styleText?: StyleProp<TextStyle>
    Button?: StyleProp<ViewStyle>
    name: string
    onPress: (key: string) => void
}

export default function PressableButton({onPress, name, Button, styleText}: Props) {
    return (
        <Pressable onPress={() => onPress(name)} style={Button || styles.Button}>
            <Text style={styleText ? [styles.buttonText, styleText] : styles.buttonText}>{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        margin: 0,
        padding: 0,
        flexDirection: 'row',
        backgroundColor: '#292d36',
    },
    leftSideButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Button: {
        margin: 5,
        padding: 12,
        textAlign: 'center',
        borderRadius: 190,
        backgroundColor: '#22252d',
        height: "40%",
        width: '20%',
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
    }
});
