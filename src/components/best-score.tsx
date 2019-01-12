import * as React from 'react';

class BestScore extends React.Component {
    public state: IBestScore = {
        bestScore: ''
    };

    public componentDidMount(): void {
        const score: string | null = localStorage.getItem('best');
        this.setState({ bestScore: score || 'first game' })
    }

    public componentDidUpdate(prevProps: any, prevState: Readonly<IBestScore>): void {
        const score: string | null = localStorage.getItem('best');
        if (prevState.bestScore !== score) {
            this.setState({ bestScore: score || 'first game' })
        }
    }

    public render(): React.ReactNode {
        return (
            <div>{this.state.bestScore}</div>
        );
    }
}

export default BestScore;