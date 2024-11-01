import React from 'react';
import './App.scss';

// ways to create a react component:
// 1- class component
// 2- function

const Header = () => {
  return (
    <header>
        <h1>New Header!</h1>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
        <h1>401d6 React Footer!</h1>
    </footer>
  )
}

class Main extends React.Component {
 
  constructor(props) {
    super(props);
    // add state.words here and initialize it
    this.state = {
      words : 'Intial Render of Words not Reveresed!'
    }
  }

  handleChange = (e) => {
    let words = e.target.value;
    // update this.state.words with new words
    // this.state is immutable (you can not change it directly)
    this.setState({words});
  }

  handleClick = (e) => {
    let words = this.state.words.split('').reverse().join('');
    this.setState({words});
  }

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
