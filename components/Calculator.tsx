import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from "./Screen";
import Buttons from "./Buttons";

export default function Calculator() {
    const [number, setNumber] = useState('')
    return (
        <View style={styles.container}>
            <Screen text={number}/>
            <Buttons onChange={(text) => setNumber(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22252d',
    },
});
