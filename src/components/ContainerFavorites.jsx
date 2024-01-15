import React, { useContext } from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FavoritesContext } from "../context/favoritesContext";

export default function ContainerFavorites() {
  const { allFavorites } = useContext(FavoritesContext);

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {allFavorites.map((character) => (
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
    </>
  );
}
