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


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
    <Wrapper>
      <Title>Videogame Characters List</Title>
      <CharacterCard
        name={characters[0].name}
        image={characters[0].image}
        occupation={characters[0].occupation}
      />
      <CharacterCard
        name={characters[1].name}
        image={characters[1].image}
        occupation={characters[1].occupation}
      />
      <CharacterCard
        name={characters[2].name}
        image={characters[2].image}
        occupation={characters[2].occupation}
      />
      <CharacterCard
        name={characters[3].name}
        image={characters[3].image}
        occupation={characters[3].occupation}
      />
      <CharacterCard
        name={characters[4].name}
        image={characters[4].image}
        occupation={characters[4].occupation}
      />
      <CharacterCard
        name={characters[5].name}
        image={characters[5].image}
        occupation={characters[5].occupation}
      />
      <CharacterCard
        name={characters[6].name}
        image={characters[6].image}
        occupation={characters[6].occupation}
      />
      <CharacterCard
        name={characters[7].name}
        image={characters[7].image}
        occupation={characters[7].occupation}
      />
      <CharacterCard
        name={characters[8].name}
        image={characters[8].image}
        occupation={characters[8].occupation}
      />
      <CharacterCard
        name={characters[9].name}
        image={characters[9].image}
        occupation={characters[9].occupation}
      />
      <CharacterCard
        name={characters[10].name}
        image={characters[10].image}
        occupation={characters[10].occupation}
      />
      <CharacterCard
        name={characters[11].name}
        image={characters[11].image}
        occupation={characters[11].occupation}
      />
    </Wrapper>
  );

export default App;
