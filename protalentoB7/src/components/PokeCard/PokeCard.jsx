import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PokeCard({ pokemon }) {
  return (
    <Card key={pokemon.id} style={{ width: "18rem", padding: "2em" }}>
      <Card.Img
        variant="top"
        className="poke-img"
        src={pokemon.sprites.other.dream_world.front_default}
      />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>INFO DEL POKEMON</Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
  );
}
