import React from 'react';
import {StyleSheet, View} from 'react-native';
import PressableButton from "./Button";

export default function Buttons() {
    return (
        <View style={styles.buttonComponent}>
            <View style={styles.leftSideButtons}>

                <PressableButton
                    name="AC"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#26c8ad"}]}
                />

                <PressableButton
                    name="DEL"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#26c8ad"}]}
                />

                <PressableButton
                    name="%"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#26c8ad"}]}
                />

                <PressableButton
                    name="÷"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#b26164"}]}
                />

                <PressableButton
                    name="7"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="8"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="9"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="×"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#b26164"}]}
                />

                <PressableButton
                    name="4"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="5"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="6"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="−"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#b26164"}]}
                />

                <PressableButton
                    name="1"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="2"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="3"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="+"
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#b26164"}]}
                />

                <PressableButton
                    name="H"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="0"
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="."
                    styleButton={styles.Button}
                    styleText={styles.buttonText}
                />

                <PressableButton
                    name="="
                    styleButton={styles.Button}
                    styleText={[styles.buttonText, {color: "#b26164"}]}
                />
            </View>
        </View>
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
