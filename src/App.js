import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Navbar from "./components/Navbar/Navbar";
// charactersArray
import characters from "./characters.json";



class App extends Component {

  state = {
    userScore: 0,
    highScore: 0,
    characters: characters 
  };

  resetClicked = () => {
    this.state.characters.map(character =>
      character.clicked = false
    )
  }

  handleScore = () => {
    const newScore = this.state.userScore + 1;
    this.setState({
      userScore: newScore
    })
    if (newScore >= this.state.highScore) {
      this.setState({
        highScore: newScore
      })
    }
    if (newScore === 12) {
      this.setState({ userScore: 0 });
      this.resetClicked();
    }
  };

  handleClick = (id) => {
    for (var i = 0; i < this.state.characters.length; i++) {
      if (id === this.state.characters[i].id) {
        if (this.state.characters[i].clicked === false) {
          this.state.characters[i].clicked = true;
          this.handleScore();
        }
        else if (this.state.characters[i].clicked === true) {
          this.setState({ userScore: 0 });
          this.resetClicked();
        }
      }
    }

    this.setState({
      characters: characters.sort( () => Math.random() > Math.random() )
    })
  }
  
render() {
  return (
    <Wrapper>
      <Title>Nintendo/Sega Characters Game</Title>
      <Navbar userScore={this.state.userScore} highScore={this.state.highScore}/>
      <div className="container character-box">
      { this.state.characters.map(character => (
            <CharacterCard            
              id={character.id}
              name={character.name}
              image={character.image}
              occupation={character.occupation}
              clicked={character.clicked}
              handleClick={this.handleClick}
            />
          ))}
      </div>
    </Wrapper> 
        )
  }
}

export default App;
