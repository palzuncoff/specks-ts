import * as React from 'react';

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
                style={{
                    backgroundColor: this.color(),
                    borderStyle: 'solid',
                    color: 'yellow',
                    fontSize: 30,
                    height: '60px',
                    width: '60px',
                }}
                className="test-speck-btn"
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
        if (value === 0) { return 'white' }
        return raver === value ? 'red' : 'grey'
    }
}

export default Speck;