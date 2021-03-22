import React from 'react';
import { IState, IAction } from '../interfaces';

const initialState: IState = {
    gameStarted: false,
    pickedFirstValue: false,
    gameBoard: new Array(4).fill(Array(4).fill(null)),
    gameEnded: false,
}

const defaultAction: React.Dispatch<IAction> = () => {};

const GameStateContext = React.createContext<IState>(initialState);
const GameDispatchContext = React.createContext<React.Dispatch<IAction>>(defaultAction)

function gameReducer(state: IState, action: IAction) {
    switch (action.type) {
        case 'GAME_START':
            return {...state, gameStarted: true, gameEnded: false};
        case 'RESET_GAME':
            return initialState;
        case 'PICKED_FIRST_VALUE':
            return {...state, pickedFirstValue: true};
        case 'UPDATE_GAME_BOARD':
            const updatedGameBoard = [...state.gameBoard];
            updatedGameBoard[action.payload.rowIndex][action.payload.columnIndex] = action.payload.value;
            console.log(updatedGameBoard);
            return {...state, gameBoard: updatedGameBoard}
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

function GameProvider({children}:any) {
    const [state, dispatch] = React.useReducer(gameReducer, initialState)
    return (
      <GameStateContext.Provider value={state}>
        <GameDispatchContext.Provider value={dispatch}>
          {children}
        </GameDispatchContext.Provider>
      </GameStateContext.Provider>
    )
}

function useGameState() {
    const context = React.useContext(GameStateContext)
    if (context === undefined) {
      throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

function useGameDispatch() {
    const context = React.useContext(GameDispatchContext)
    if (context === undefined) {
      throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}
  
  export {GameProvider, useGameState, useGameDispatch};