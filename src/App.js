import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
// charactersArray
import characters from "./characters.json";
// counter
// import Counter from "./components/Counter";


class App extends Component {

  // Setting the initial state of the Counter component
  state = {
    userScore: 0,
    characters: characters    
  };


  handleCorrect = () => {
    // We always use the setState method to update a component's state
    this.setState({ userScore: this.state.count + 1 });
  };

  // shuffleData = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };




  handleClick = (id) => {
    // randomize them regardless of right or wrong
    let guessedCorrectly = false;
    for (var i = 0; i < this.state.characters.length; i++) {
      if (id === this.state.characters[i].id) {
        if (this.state.characters[i].clicked === false) {
          this.state.characters[i].clicked = true;
          this.handleCorrect();
        }
        else if (this.state.characters[i].clicked === true) {
          // characters: this.shuffleData needs to be in ({})
          this.setState({ userScore: 0 })
        }
      }
    }
  }
  
render() {
  return (
    <Wrapper>
      <Title>Videogame Characters List</Title>

      { this.state.characters.map(character => (
            <CharacterCard
            
            id={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            clicked={character.clicked}
            handleClick={character.handleClick}
            />
          ))}
    </Wrapper> 
        )
  }
}

export default App;
