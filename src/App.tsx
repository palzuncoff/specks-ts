import * as React from 'react';
import './App.css';
import BestScore from './components/best-score';
import PassCount from './components/pass-count';
import Row from './components/row';
import * as collection from './constants';
import * as utils from './utils';

class App extends React.Component {

    public state: IGame = {
        end: false,
        error: null,
        field: {
            0: [],
            1: [],
            2: [],
            3: [],
        },
        raver: 0,
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
                <div className="info">
                    <BestScore />
                    <PassCount />
                </div>
                <div className="field">
                    {Object.keys(this.state.field).map(key => (
                        <Row
                            key={key}
                            updateField={this.updateField}
                            rowIndex={+key}
                            row={this.state.field[key]}
                            raver={this.state.raver}
                            end={this.state.end}
                        />
                    ))}
                </div>
                <button
                    className="test-new-game new-game"
                    onClick={this.startGame}
                >
                    New Game
                </button>
            </div>
        );
    }

    private startGame = (): void => {
        const field: IRows = utils.startGame();
        this.setField(field);
        utils.delay(collection.SPECS_COLLECTION, this.setRaver).catch(error => {
            this.setState({ error });
            throw error;
        }).then(() => this.setState({ end: false }))
    };

    private updateField = (columnIndex: number, rowIndex: number, value: number): void => {
        const field = utils.pass(columnIndex, rowIndex, this.state.field, value);
        this.setField(field[0]);
        if (field[1]) {
            utils.delay(collection.SPECS_COLLECTION, this.setRaver)
                .catch(error => {
                    this.setState({ error });
                    throw error;
                })
                .then(() => this.setState({ end: true }))
                .catch(error => {
                    this.setState({ error });
                    throw error;
                })
                .then(() => utils.storeBestScore())
        }
    };

    private setField = (field: IRows): void => {
        this.setState({ field }, () => {
            localStorage.setItem('field', JSON.stringify(this.state.field))
        })
    };

    private setRaver = async (raver: number) => {
        await utils.waitFor(collection.TIME_OUT);
        this.setState({ raver })
    }
}

export default App;
