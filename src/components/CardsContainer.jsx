import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function CardsContainer() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacters();
  }, []);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container style={{ marginTop: '20px' }}>
        <Row>
          {characters.map((character) => (
            <Col key={character.id}>
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
    </ThemeProvider>
  );
}

export default CardsContainer;
