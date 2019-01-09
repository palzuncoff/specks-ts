import * as React from 'react';
import './App.css';
import Row from './components/row'
import * as collection from './constants';
import * as utils from './utils';

class App extends React.Component {

    public state: IGame = {
        field: collection.END_GAME
    };

    public render() {
        return (
            <div className="App">
              <button onClick={this.startGame}>New Game</button>
                <Row updateField={this.updateField} rowIndex={0} row={this.state.field[0]}/>
                <Row updateField={this.updateField} rowIndex={1} row={this.state.field[1]}/>
                <Row updateField={this.updateField} rowIndex={2} row={this.state.field[2]}/>
                <Row updateField={this.updateField} rowIndex={3} row={this.state.field[3]}/>
            </div>
        );
    }

    private startGame = (): void => {
        const field: IRows = utils.startGame();
        this.setState({ field })
    }

    private updateField = (columnIndex: number, rowIndex: number, value: number): void => {
        const field = utils.pass(columnIndex, rowIndex, this.state.field, value);
        this.setState({ field })
    }
}

export default App;
