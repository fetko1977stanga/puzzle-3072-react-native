import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {useGameState, useGameDispatch} from '../store/context';
import { pickRandomCell } from '../functions';
import { IAction, IState } from "../interfaces";
import { useNavigation } from "@react-navigation/native";

const GameBoard = () => {
    const state:IState = useGameState();
    const navigation = useNavigation();
    const { gameBoard, pickedFirstValue, gameStarted } = state;
    const dispatch:React.Dispatch<IAction> = useGameDispatch();
    
    const renderGameBoard = ():JSX.Element[] => {
      const rows:JSX.Element[] = gameBoard.map((row, index) => 
        <View style={styles.gameBoardRow} key={index}>
          { row.map((cellValue: number | null, index: number) => 
            <View key={index} style={styles.gameBoardCell}>
              <Text>{cellValue}</Text>
            </View>) 
          }
        </View>
      );
  
      return rows;
    }

    useEffect(() => {
      if (!pickedFirstValue) {
          pickRandomCell(gameBoard, dispatch);
          dispatch({ type: 'PICKED_FIRST_VALUE' });
      }
    }, [pickRandomCell, gameBoard, dispatch, gameStarted, pickedFirstValue]);

    return (
      <View style={styles.container}>
        <View style={styles.gameBoard}>
            { renderGameBoard() }
        </View>
        
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },

    gameBoard: {
      borderColor: 'black',
      borderWidth: 5
    },

    gameBoardRow: {
      display: 'flex',
      flexDirection: 'row',
      borderColor: '#cecece',
      borderBottomWidth: 1
    },

    gameBoardCell: {
      width: 70,
      height: 70,
      backgroundColor: 'white',
      borderColor: '#cecece',
      borderRightWidth: 1
    }
  });
 
export default GameBoard;