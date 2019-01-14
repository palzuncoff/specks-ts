import * as React from 'react';
import './speck.css'

export interface ISpeck {
    end: boolean;
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
                style={{ backgroundColor: this.color() }}
                className="test-speck-btn speck"
                onClick={this.handleOnMove}
                disabled={this.props.end}
            >
                {this.props.value !== 0 ? this.props.value : null}
            </button>
        );
    }

    private handleOnMove = (): void => {
        this.props.updateField(this.props.columnIndex, this.props.rowIndex, this.props.value)
    };

    private color = (): string => {
        const { raver, value } = this.props;
        if (value === 0) { return 'black' }
        return raver === value ? 'yellow' : 'grey'
    }
}

export default Speck;