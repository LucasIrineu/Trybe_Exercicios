import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex-list">
        {pokemons.map((element) => {
          const { name, type, averageWeight, image } = element;
          
          return <Pokemon name={name} type={type} averageWeight={averageWeight} image={image}/>
      })}
      </div>
    )
  }
}

export default Pokedex;
