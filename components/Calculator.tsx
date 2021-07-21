import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from "./Screen";
import Buttons from "./Buttons";

export default function Calculator() {
    const [number, setNumber] = useState('')
    const [ans, setAns] = useState('')
    return (
        <View style={styles.container}>
            <Screen text={number} ans={ans}/>
            <Buttons onChange={(text, ans) => {
                setNumber(text)
                if (ans){
                    setAns(ans)
                }

            } }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22252d',
    },
});
