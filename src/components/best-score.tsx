import * as React from 'react';

class BestScore extends React.Component {
    public state: IBestScore = {
        bestScore: ''
    };

    public componentDidMount(): void {
        const score: string | null = localStorage.getItem('best');
        this.setState({ bestScore: score || 'first game' })
    }

    public render(): React.ReactNode {
        return (
            <div className="test-best-score" >Best result: {this.state.bestScore} passes</div>
        );
    }
}

export default BestScore;