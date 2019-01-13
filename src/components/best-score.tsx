import * as React from 'react';

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

    public render(): React.ReactNode {
        return (
            <div>
                <div className="test-best-score" >Best result: {this.state.bestScore} passes</div>
                <div className="test-worst-score" >Worst result: {this.state.worstScore} passes</div>
            </div>
        );
    }
}

export default BestScore;