import { IAction } from "../interfaces";

export const pickRandomCell = (gameBoard:Array<Array<number | null>>, dispatch: React.Dispatch<IAction>) => {
    console.log('pickRandomCell called');
    const rowIndex = Math.floor(Math.random() * Math.floor(gameBoard.length));
    // console.log('rowIndex', rowIndex);
    const columnIndexes = Array.from(Array(gameBoard[rowIndex].length).keys());
    // console.log('columnIndexes', columnIndexes);
    const freeColumnIndexes = columnIndexes.filter(columnIndex => gameBoard[rowIndex][columnIndex] === null);
    // console.log('freeColumnIndexes', freeColumnIndexes);
    const columnIndex = freeColumnIndexes[Math.floor(Math.random() * freeColumnIndexes.length)];
    // console.log(columnIndex);

    // const newGameBoard = [...gameBoard];
    // newGameBoard[rowIndex][columnIndex] = 3;
    
    dispatch({ type: 'UPDATE_GAME_BOARD', payload: { rowIndex, columnIndex, value: 3 } });
}
