import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status: "tick",
            count: 0
        }
    }
    
    updateStatus(newCount) {
        if (newCount >= 8){
            this.setState({
                status: "BOOM!!!",
                count: 0
            })
            clearInterval(this.interval);
        }else if (newCount % 2 === 0){
            this.setState({
                status: "tick",
                count: newCount
            })
        }else{
            this.setState({
                status: "tock",
                count: newCount
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let newCount = this.state.count +1;
            this.updateStatus(newCount);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        console.log(this.state.count);
        return (
            <div>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default Bomb;