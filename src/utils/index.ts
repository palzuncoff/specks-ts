import * as _ from 'lodash';
import * as collection from '../constants';

export function startGame(): IRows {
    const random: number[] = _.shuffle(collection.SPECS_COLLECTION);
    return {
        0: random.slice(0, 4),
        1: random.slice(4, 8),
        2: random.slice(8, 12),
        3: random.slice(12, 16),
    }
}

export function pass(x: number, y: number, field: IRows, value: number): IRows {
    const index: number[] = wereMove(x, y, field);
    if (index[0] > -1) {
        const nextField: IRows = {
            ...field,
        };
        nextField[y][x] = 0;
        nextField[index[0]][index[1]] = value;
        storePass()

        return nextField;
    }
    return field;
}

export function wereMove(x: number, y: number, field: IRows): number[] {
    const topIndex: number = y + 1;
    const bottomIndex: number = y -1;
    const leftIndex: number = x - 1;
    const rightIndex: number = x + 1;
    if (topIndex >= 0 && topIndex <= 3) {
        if (field[topIndex][x] === 0) {
            return [topIndex, x]
        }
    }
    if (bottomIndex >= 0 && bottomIndex <= 3) {
        if (field[bottomIndex][x] === 0) {
            return [bottomIndex, x]
        }
    }
    if (leftIndex >= 0 && leftIndex <= 3) {
        if (field[y][leftIndex] === 0) {
            return [y, leftIndex]
        }
    }
    if (rightIndex >= 0 && rightIndex <= 3) {
        if (field[y][rightIndex] === 0) {
            return [y, rightIndex]
        }
    }
    return [-1]
}

export function storePass(): void {
    const last: string = localStorage.getItem('pass') || '0';
    const next: number = Number.parseInt(last, 10) + 1;
    localStorage.setItem('pass', next.toString());
}