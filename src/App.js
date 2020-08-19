import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Card from './Card'
import fire from './fire.js'
import firebase from 'firebase'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import PokemonIndex from './PokemonIndex'

function App() {


  const [statePokemon,setPokemon] = useState([]);
  const [firebasePokemon,setFirebasePokemon]=useState([]);

  useEffect(()=> {
    const pokemonRef=firebase.database().ref('pokemon').limitToLast(100);
    pokemonRef.on('value',pokemon => {
      const pokemonArray = [];
      pokemon.forEach(poke => {
        pokemonArray.push(poke.val());
      })
    setFirebasePokemon(pokemonArray);
    })

    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(pokemon =>pokemon.json())
    .then(pokemonJson => {
      const pokemonData = []
      pokemonJson.results.forEach((pokemon,index) => {
        fetch(pokemon.url)
        .then(fullPokemon => fullPokemon.json())
        .then(fullPokemonJson => {
          pokemonData.push({
            image: fullPokemonJson.sprites.front_default,
            name:fullPokemonJson.name,
            weight:fullPokemonJson.weight
          })
          if(pokemonData.length === 20){
            setPokemon(pokemonData);
            console.log(pokemonData);
          }
        }) 
      })  
    })
  },[])
  
  const title="Signup jithu";
  const fields=['name','weight'];
  return (
    <Router>
      <div className="App"> 
        <Link to='/'>All Pokemon</Link>
        <Link to='/new'>Create Pokemon</Link>
        <Route 
          path="/new" 
          render={()=> 
            <Form
              title = { title }
              fields ={fields}
            />
          }
        />
        <Route 
          path="/" 
          render={()=> 
            <PokemonIndex
              
              firebasePokemon={firebasePokemon}
            
            />
          }
        />             
      </div>
    </Router>   
  );
}

export default App;
