import React, { Component } from 'react';
import './App.css';
import  GenerateQuote  from  './GenerateQuote';
import  DisplayQuote  from  './DisplayQuote';

const  sampleQuote = {
  quote:"I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
  character:"Homer Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection:"Right"
  };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote =  this.getQuote.bind(this)
  }


  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0],          
        });
    });
    
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <GenerateQuote selectQuote={this.getQuote}/>
      </div>
    );
  }
}

export default App;
