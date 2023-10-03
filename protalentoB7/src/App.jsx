import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* BOOTSTRAP REACT */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
/* ---------------- */

function App() {
  const [pokemon, setPokemon] = useState([]);

  async function pedidoApi() {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
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
  }, []);

  function searchHandler(e) {
    let searchedPokemon = pokemon.filter((pokemon) =>
      pokemon.name.includes(e.target.value)
    );

    // console.log(searchedPokemon);

    setPokemon(searchedPokemon);
  }
  return (
    <>
      <div>
        {" "}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Ingresa un nombre"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => searchHandler(e)}
                />
                <Button variant="outline-success">BUSCAR</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="card-container">
        {pokemon.map((pokemon) => (
          <Card key={pokemon.id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pokemon.sprites.other.dream_world.front_default}
            />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>INFO DEL POKEMON</Card.Text>
              <Button variant="primary">Más información</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>Footer</div>
    </>
  );
}

export default App;
