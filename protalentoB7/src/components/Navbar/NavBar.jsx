import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import pokemonLogo from "../../assets/images/pokemonLogo.png";
import "./navbarStyles.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function searchHandler(e) {
    navigate(`/pokemon/${input}`);
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="">
            <img src={pokemonLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", display: "flex", gap: "1rem" }}
              navbarScroll
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home{" "}
              </NavLink>

              <NavLink
                to="/sobrenosotros"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Sobre nosotros{" "}
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ingresa un nombre"
                className="me-2"
                aria-label="Search"
                onChange={(e) => inputHandler(e)}
              />

              <Button
                variant="outline-success"
                onClick={(e) => searchHandler(e)}
              >
                BUSCAR
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
