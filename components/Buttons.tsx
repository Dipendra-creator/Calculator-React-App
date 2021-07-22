import React, {useState} from 'react';
import {Text} from 'react-native';
import {Modal, StyleSheet, View, Pressable} from 'react-native';
import PressableButton from "./Button";
import { Icon } from 'react-native-elements'

interface Props {
    onChange: (keys: string, ans?: string) => void

}

export default function Buttons({onChange}: Props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [keys, setKeys] = useState('');
    const [ans, setAns] = useState('');
    const specialKeys = ['%', '/', '*', '-', '+'];


    const [history, setHistory] = useState<string[]>([])

    // TODO: Gives error if you press any single button too many times continuously
    function logPress(key: string) {
        if (key === 'DEL') {
            setKeys((keys) => {
                    onChange(keys.slice(0, keys.length - 1))
                    return keys.slice(0, keys.length - 1)
                }
            )
        } else if (key === 'AC') {
            setKeys('')
            setAns('')
            onChange('', '0')
        } else if (key === '(+/-)') {
            // In case the value is already negative
            if (keys.startsWith('-(') && keys.endsWith(')')) {
                setKeys(keys => {
                    keys = keys.replace('-(', '')
                    keys = keys.replace(')', '')
                    onChange(keys)
                    return keys
                })
                return
            }
            setKeys("-(" + keys + ")")
            onChange("-(" + keys + ")")
        } else if (key === '=') {
            // If any of the specialKeys is present in the keys expression
            if (specialKeys.some(sKey => keys.includes(sKey))) {
                const val = eval(keys);
                // setKeys(val)
                setAns(val)
                onChange('', val)
                setHistory((history) => [...history, `${keys} = ${val}`])
            }
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
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Icon
                                iconStyle={styles.icon}
                                size={40}
                                name='close'
                                type='font-awesome'
                                color='#fff'
                                onPress={() => setModalVisible(!modalVisible)} />
                            {history.map((his, key) => <Text key={key} style={[styles.history, {color: 'white',}]}>{his}</Text>)}
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.leftSideButtons}>

                {/* AC, DEL, %, ÷ */}
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
                    name="(+/-)"
                    styleText={styles.operationColor}
                    onPress={logPress}

                />

                <PressableButton
                    name="/"
                    styleText={styles.operationColor}
                    onPress={logPress}
                />

                {/* 7, 8, 9, × */}
                <PressableButton
                    name="7"
                    onPress={logPress}
                />
                <PressableButton
                    name="8"
                    onPress={logPress}
                />
                <PressableButton
                    name="9"
                    onPress={logPress}
                />

                <PressableButton
                    name="*"
                    styleText={styles.operationColor}
                    onPress={logPress}
                />

                {/* 4, 5, 6, - */}
                <PressableButton
                    name="4"
                    onPress={logPress}
                />
                <PressableButton
                    name="5"
                    onPress={logPress}
                />
                <PressableButton
                    name="6"
                    onPress={logPress}
                />

                <PressableButton
                    name="-"
                    styleText={styles.operationColor}
                    onPress={logPress}/>

                {/* 1, 2, 3, + */}
                <PressableButton
                    name="1"
                    onPress={logPress}
                />
                <PressableButton
                    name="2"
                    onPress={logPress}
                />
                <PressableButton
                    name="3"
                    onPress={logPress}
                />

                <PressableButton
                    name="+"
                    styleText={styles.operationColor}
                    onPress={logPress}
                />

                {/* H, 0, ., = */}
                <PressableButton
                    name="H"
                    styleText={styles.functionColor}
                    onPress={() => setModalVisible(true)}
                />

                <PressableButton
                    name="0"
                    onPress={logPress}
                />
                <PressableButton
                    name="."
                    onPress={logPress}
                />

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: '90%',
        width: '90%',
        margin: 20,
        backgroundColor: "#22252d",
        borderRadius: 20,
        padding: 35,
        paddingTop: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#bf853b",
    },
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
    functionColor: {
        color: "#26c8ad"
    },
    operationColor: {
        color: "#b26164"
    },
    history: {
        width: "100%",
        textAlign: "center",
        margin: 3,
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff"
    },
    icon: {
        marginBottom: 20
    }
});
