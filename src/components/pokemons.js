import React from 'react'

    const Pokemons = ({ pokemon }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {pokemons.map((pokemon) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{pokemon.name}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Pokemons;