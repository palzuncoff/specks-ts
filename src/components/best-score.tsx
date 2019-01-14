import * as React from 'react';
import './best-score.css'

class BestScore extends React.Component {
    public state: IBestScore = {
        bestScore: '',
        worstScore: '',
    };

    public componentDidMount(): void {
        const score: string | null = localStorage.getItem('best');
        const worst: string | null = localStorage.getItem('worst');
        this.setState({ bestScore: score || '0', worstScore: worst || '0' })
    }

    public componentDidUpdate(prevProps: any, prevState: IBestScore): void {
        const score: string = localStorage.getItem('best') || '0';
        const worst: string = localStorage.getItem('worst') || '0';
        if (prevState.bestScore !== score || prevState.worstScore !== worst) {
            this.setState({ bestScore: score, worstScore: worst })
        }
    }

    public render(): React.ReactNode {
        return (
            <div className="score">
                <div className="test-best-score best" >Best result# {this.state.bestScore}</div>
                <div className="test-worst-score best" >Worst result# {this.state.worstScore}</div>
            </div>
        );
    }
}

export default BestScore;