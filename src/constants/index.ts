export const SPECS_COLLECTION: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
export const END_GAME: IRows = {
    0: [1, 2, 3, 4],
    1: [5, 6, 0, 8],
    2: [9, 10, 11, 12],
    3: [13, 14, 15, 7],
};
export const WIN: string = JSON.stringify({
    0: [1, 2, 3, 4],
    1: [5, 6, 7, 8],
    2: [9, 10, 11, 12],
    3: [13, 14, 15, 0],
});
export const PASS_TO_WIN: string = JSON.stringify({
    0: [1, 2, 3, 4],
    1: [5, 6, 7, 8],
    2: [9, 10, 11, 0],
    3: [13, 14, 15, 12],
});
export const TIME_OUT: number = 80;