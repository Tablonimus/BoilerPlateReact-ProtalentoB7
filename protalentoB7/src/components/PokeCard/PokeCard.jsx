import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function PokeCard({ pokemon }) {

  function capitalizeFirstLetter(string) {
    // Obtenemos la primera letra
    const firstLetter = string.charAt(0);

    // La convertimos a mayúscula
    const uppercaseFirstLetter = firstLetter.toUpperCase();

    // Concatenamos la primera letra mayúscula con el resto de la cadena
    const capitalizedString = uppercaseFirstLetter + string.slice(1);

    return capitalizedString;
  }
  return (
    <Card key={pokemon.id} style={{ width: "18rem", padding: "2em" }}>
      <Card.Img
        variant="top"
        className="poke-img"
        src={pokemon.sprites.other.dream_world.front_default}
      />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(pokemon.name)}</Card.Title>
        {/* <Card.Text>INFO DEL POKEMON</Card.Text> */}
        <Link to={`/pokemon/${pokemon.id}`}>
          <Button variant="primary">Más información</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
