import React from 'react';
// import Split from './composition/Split';
import './App.css';
import Accordion from "./state-drills/Accordion";

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Accordion sections={sections}/>
      </main>
    );
  }
  
}

export default App;
