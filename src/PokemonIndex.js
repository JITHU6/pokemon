import React from 'react'
import Card from './Card'

function PokemonIndex({firebasePokemon}){
    return(
        <div>
            {firebasePokemon.map( poke=>
                <Card 
                image={ poke.image }
                name={poke.name}
                weight={poke.weight}
                />

            )}
        </div>

    )
}
export default PokemonIndex;