import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: "world",
        }
    }

    handleClick = (event) => {
        let thing = event.currentTarget.value;
        this.setState({who: thing});
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button value="world" onClick={this.handleClick}>World</button>
                <button value="friend" onClick={this.handleClick}>Friend</button>
                <button value="react" onClick={this.handleClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;