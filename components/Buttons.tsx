import React, {useState} from 'react';
import { Text } from 'react-native';
import {Modal, StyleSheet, View, Pressable} from 'react-native';
import PressableButton from "./Button";

interface Props {
    onChange: (arg0: string) => void
}

export default function Buttons({onChange}: Props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [keys, setKeys] = useState('')
    const specialKeys = [ '%', '/', '*', '-', '+', '='];

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
        } else if (key === '(+/-)') {
            setKeys("-("+keys+")")
            onChange("-("+keys+")")
        } else if (key === '=') {
            for (let i = 0; i < keys.length; i++) {
                if (specialKeys.includes(keys[i].toString())){
                    let val = eval(keys);
                    setKeys(val)
                    onChange(val)
                }
            }
        } else {
            setKeys((keys) => {
                    onChange(keys + key)
                    return keys + key
                }
            )
        }
    }

    function historyPress() {

        return (
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
                            <Text>Hello World!</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        )
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
                            <Text style={{color: 'white',}}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide History</Text>
                            </Pressable>
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
    }
});
