import React, { useState, useEffect } from "react";
import "./homeStyles.css";
import PokeCard from "../../components/PokeCard/PokeCard";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Home() {
  const [pokemonPerPage, serPokemonPerPage] = useState(8); // => limit y config de página
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  async function pedidoApi() {
    let data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${offset}`
    );
    let response = await data.json();
    let arrayPokemon = [];

    for (let i = 0; i < response.results.length; i++) {
      const element = response.results[i];

      let data = await fetch(element.url);
      let responseData = await data.json();

      arrayPokemon.push(responseData);
    }
    setPokemon(arrayPokemon);
  }

  useEffect(() => {
    pedidoApi();
  }, [offset]);

  function prevPageHandler(e) {
    if (offset > 0) setOffset(offset - pokemonPerPage);
  }
  function nextPageHandler(e) {
    setOffset(offset + pokemonPerPage);
  }

  console.log(offset);
  return (
    <div>
      <div className="card-container">
        {pokemon.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </div>
      <ButtonGroup className="m-2  ">
        <Button onClick={(e) => prevPageHandler(e)}>◀ Anterior</Button>
        {/* <Button>Middle</Button> */}
        <Button onClick={(e) => nextPageHandler(e)}>Siguiente ▶</Button>
      </ButtonGroup>
    </div>
  );
}
