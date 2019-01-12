import * as React from 'react';

export interface ISpeck {
    raver: number;
    value: number;
    rowIndex: number;
    columnIndex: number;
    updateField(columnIndex: number, rowIndex: number, value: number): void;
}

class Speck extends React.Component<ISpeck> {
    public render() {
        return (
            <button
                style={{ width: '60px', height: '60px', borderStyle: 'solid', backgroundColor: this.onRave() }}
                onClick={this.handleOnMove}
            >
                {this.props.value !== 0 ? this.props.value : null}
            </button>
        );
    }

    private handleOnMove = (): void => {
        this.props.updateField(this.props.columnIndex, this.props.rowIndex, this.props.value)
    }

    private onRave = (): string => {
        const { raver, value } = this.props;
        return raver === value && raver !== 0 ? 'red' : 'grey'
    }
}

export default Speck;