import * as React from 'react';
import './App.css';
import PassCount from './components/pass-count';
import Row from './components/row';
import * as utils from './utils';

class App extends React.Component {

    public state: IGame = {
        field: {
            0: [],
            1: [],
            2: [],
            3: [],
        }
    };

    public componentDidMount(): void {
        const fieldJSON: string | null = localStorage.getItem('field');
        if (fieldJSON !== null) {
            this.setField(JSON.parse(fieldJSON))
        } else {
            this.startGame()
        }
    }

    public render() {
        return (
            <div className="App">
                <PassCount />
                <button className="test-new-game" onClick={this.startGame}>New Game</button>
                {Object.keys(this.state.field).map(key => (
                    <Row
                        key={key}
                        updateField={this.updateField}
                        rowIndex={+key}
                        row={this.state.field[key]}/>
                ))}
            </div>
        );
    }

    private startGame = (): void => {
        const field: IRows = utils.startGame();
        this.setField(field);
    };

    private updateField = (columnIndex: number, rowIndex: number, value: number): void => {
        const field = utils.pass(columnIndex, rowIndex, this.state.field, value);
        this.setField(field);
    };

    private setField = (field: IRows): void => {
        this.setState({ field }, () => {
            localStorage.setItem('field', JSON.stringify(this.state.field))
        })
    }
}

export default App;
