import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./detailStyles.css";
import { Spinner } from "react-bootstrap";

export default function Detail() {
  let params = useParams(); //{id:3}
  const [pokemon, setPokemon] = useState(false);

  async function pedidoApi() {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    let response = await data.json();

    setPokemon(response);
  }

  function capitalizeFirstLetter(string) {
    // Obtenemos la primera letra
    const firstLetter = string.charAt(0);

    // La convertimos a mayúscula
    const uppercaseFirstLetter = firstLetter.toUpperCase();

    // Concatenamos la primera letra mayúscula con el resto de la cadena
    const capitalizedString = uppercaseFirstLetter + string.slice(1);

    return capitalizedString;
  }

  useEffect(() => {
    pedidoApi();
  }, [params]);

  return (
    <div className="detail-container">
      {pokemon ? (
        <div className="poke-detail">
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
          <div>
            <span>Peso: {pokemon.weight} kg</span>
          </div>
          <Link to={"/"}>
            <button>◀VOLVER</button>
          </Link>
        </div>
      ) : (
        <>
          Cargando...
          <Spinner animation="grow" variant="danger" />
        </>
      )}
    </div>
  );
}

/* 
    <h1>
        {pokemon.name ? capitalizeFirstLetter(pokemon.name) : "Cargando nombre"}
      </h1>

      {pokemon.sprites ? (
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      ) : (
        "Cargando imagen"
      )}

*/
