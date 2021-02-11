// ViewAllPokemons
import { useState, useEffect } from "react";
import TransitionsModal from '../components/PokemonDetailed';

// Import api functionality
import Api from "../api/index";

const ViewAllPokemons = () => {
  const [pokemonList, setPokemonList] = useState();
  const [myPokemon, setMyPokemon] = useState();

  const [openModal, setopenModal] = useState();
  const toggleModalLayer = () => { setopenModal(!openModal);  }

  const modalData = (pokemon) => {
     console.log('pokemonVALUE from Parent: ', pokemon);
     setMyPokemon(pokemon);

     setTimeout(function() {
        console.log('myPokemon-StateVariable from Parent after 1 second  ', myPokemon  )
     // console.log('myPokemon.name.english ', myPokemon.name.english )
 }, 1000);

  }



  useEffect(() => {
    Api.getAllPokemons()
      .then((res)=>{
        setPokemonList(res);
      })
      .catch((err)=>{
        console.error(err)
      })
  },[]);

  return(
    <>
      <h1>All Pokemons</h1>
       <TransitionsModal  openModal={toggleModalLayer}  currentPokemon={myPokemon} />
      <div className="pokemon-list">
      {/* FIXME: get better solution for limiting/offset/streaming */}
        <ul>
          {pokemonList
            ? pokemonList.slice(0, 10).map((pokemon) => {
            return <li  key={pokemon.id} onClick={() => {toggleModalLayer();   modalData(pokemon)}}>
                 {pokemon.name.english}
            </li>
          })
          : null
          }
        </ul>
      </div>
    </>
  );
};

export default ViewAllPokemons;