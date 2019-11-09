import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            content: null
        }
    }
    
    static defaultProps = {
        bulletInChamber: 8
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
            content: "spinning the chamber and pulling the trigger! ..."
        });
        this.timeout = setTimeout(() => {
            let randomNum = Math.ceil(Math.random()*8);
            this.setState({
                chamber: randomNum,
                spinningTheChamber: false,
            });
            this.updateDom();
        }, 2000)
    }

    updateDom = () => {
        if (this.state.chamber == this.props.bulletInChamber) {
            this.setState({content: "BANG!!!!"})
        }else{
            this.setState({content: "you're safe!"})
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <div>
                <p>{this.state.content}</p>
                <button onClick={() => this.handleClick()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;