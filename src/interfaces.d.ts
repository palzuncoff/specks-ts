interface IRows {
    0: number[];
    1: number[];
    2: number[];
    3: number[];
}

interface IGame {
    field: IRows;
    raver: number;
    error: any;
    end: boolean;
}

interface ICount {
    pass: string;
}

interface IBestScore {
    bestScore: string;
    worstScore: string;
}