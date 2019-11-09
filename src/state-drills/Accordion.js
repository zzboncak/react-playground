import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }
    state = {
        currentIndex: null,
    }

    buildButtons() {
        const listOfButtons = this.props.sections.map((button, index) => (
            <li key={index}>
                <button onClick={() => this.updateIndex(index)}>{button.title}</button>
                {this.state.currentIndex === index && (
                    <p>{button.content}</p>
                )}
            </li>
        ))
        return listOfButtons;
    }

    updateIndex(index) {
        this.setState(
            {currentIndex: index}
        );
    }

    render() {
        return (
            <div>
                <ul>
                    {this.buildButtons()}
                </ul>
            </div>
        )
    }
}

export default Accordion;