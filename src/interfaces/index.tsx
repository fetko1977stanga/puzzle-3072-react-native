export interface IState {
    gameStarted: boolean;
    pickedFirstValue: boolean;
    gameBoard: Array<Array<number | null>>;
    gameEnded: boolean;
}

export interface IAction {
    type: string;
    payload?: any
}

export interface IGameOutcome {
    result: string;
    winningIds: number[];
}