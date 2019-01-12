import * as React from 'react';

class PassCount extends React.Component {
    public state: ICount = {
        pass: '0',
    };

    public componentDidMount(): void {
        this.setState({ pass: localStorage.getItem('pass') || '0' })
    }

    public componentDidUpdate(prevProps: any, prevState: any, snapshot?: any): void {
        const pass = localStorage.getItem('pass') || '0';
        if (prevState.pass !== pass) {
            this.setState({ pass: localStorage.getItem('pass') || '0' })
        }
    }

    public render() {
        return (
            <div className="test-pass-count-class" >Pass# {this.state.pass}</div>
        )
    }
}

export default PassCount;