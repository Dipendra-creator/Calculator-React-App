import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PressableButton from "./Button";

interface Props {
    onChange: (arg0: string) => void
}

export default function Buttons({onChange}: Props) {
    const [keys, setKeys] = useState('')

    function logPress(key: string) {
        if (key === 'DEL') {
            setKeys((keys) => {
                    onChange(keys.slice(0, keys.length - 1))
                    return keys.slice(0, keys.length - 1)
                }
            )
        } else if (key === 'AC') {
            setKeys('')
            onChange('')
        } else {
            setKeys((keys) => {
                    onChange(keys + key)
                    return keys + key
                }
            )
        }
    }

    return (
        <View style={styles.buttonComponent}>
            <View style={styles.leftSideButtons}>

                <PressableButton
                    name="AC"
                    styleText={styles.functionColor}
                    onPress={logPress}
                />

                <PressableButton
                    name="DEL"
                    styleText={styles.functionColor}
                    onPress={logPress}
                />

                <PressableButton
                    name="%"
                    styleText={styles.operationColor}
                    onPress={logPress}

                />

                <PressableButton
                    name="÷"
                    styleText={styles.operationColor}
                    onPress={logPress}
                />

                <PressableButton name="7" onPress={logPress}/>
                <PressableButton name="8" onPress={logPress}/>
                <PressableButton name="9" onPress={logPress}/>

                <PressableButton
                    name="×"
                    styleText={styles.operationColor}
                    onPress={logPress}
                />

                <PressableButton name="4" onPress={logPress}/>
                <PressableButton name="5" onPress={logPress}/>
                <PressableButton name="6" onPress={logPress}/>

                <PressableButton
                    name="−"
                    styleText={styles.operationColor}
                    onPress={logPress}/>

                <PressableButton name="1" onPress={logPress}/>
                <PressableButton name="2" onPress={logPress}/>
                <PressableButton name="3" onPress={logPress}/>

                <PressableButton
                    name="+"
                    styleText={styles.operationColor}
                    onPress={logPress}
                />

                <PressableButton
                    name="H"
                    styleText={styles.functionColor}
                    onPress={logPress}
                />

                <PressableButton name="0" onPress={logPress}/>
                <PressableButton name="." onPress={logPress}/>

                <PressableButton
                    name="="
                    styleText={styles.operationColor}
                    onPress={logPress}
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
    },
    functionColor: {color: "#26c8ad"},
    operationColor: {color: "#b26164"}
});
