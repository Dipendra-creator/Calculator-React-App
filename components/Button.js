import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export default function PressableButton(props) {
    return (
        <Pressable style = {[props.styleButton]}>
            <Text style={[props.styleText]}>{props.name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
