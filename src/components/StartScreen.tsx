import React, { Fragment, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useGameDispatch, useGameState } from '../store/context';
import { useNavigation  } from '@react-navigation/native';
import { Button } from 'react-native-elements';

export default function StartScreen() {
    const dispatch = useGameDispatch();
    const navigation = useNavigation();
    const { gameBoard } = useGameState();
    const handleGameStart = ():void => {
        dispatch({ type: 'GAME_START' });
        navigation.navigate('Game');
    }

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.howToPlayIntroWrapper}>
                    <Text>Starting Screen</Text>
                </View>
                <View style={styles.actionsWrapper}>
                    <View style={styles.borderTop}></View>
                    <Button
                        icon={{name: 'play-circle', type: 'font-awesome', size: 40, color: 'white'}}
                        iconRight
                        title='Start Game'
                        onPress={handleGameStart}
                        containerStyle={styles.buttonContainerStyle}
                        buttonStyle={styles.buttonStyle}
                    />
                </View>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#cecece'
    },
    howToPlayIntroWrapper: {
        
    },
    actionsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

    },
    borderTop: {
        height: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.65,
        shadowRadius: 5,

        elevation: 3,
    },
    buttonContainerStyle: {
        width: '100%',
        borderRadius: 0
    },
    buttonStyle: {
        backgroundColor: '#990077',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15
    }
})