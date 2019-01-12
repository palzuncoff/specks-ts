import * as React from 'react';
import Speck from './speck';

export interface IRow {
    end: boolean;
    raver: number;
    row: number[];
    rowIndex: number;
    updateField(rowIndex: number, columnIndex: number, value: number): void;
}

class Row extends React.Component<IRow> {
    public render() {
        return (
            <div style={{ display: 'flex' }}>
                {this.props.row.map((sp, i) => (
                    <Speck
                        updateField={this.props.updateField}
                        rowIndex={this.props.rowIndex}
                        columnIndex={i}
                        key={sp}
                        value={sp}
                        raver={this.props.raver}
                        end={this.props.end}
                    />
                ))}
            </div>
        )
    }
}

export default Row;