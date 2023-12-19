import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardsContainer({ image, name, species, status, gender }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((character) => (
          <Col>
            <Card
              id={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
              gender={character.gender}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsContainer;
