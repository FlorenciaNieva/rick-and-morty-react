import { useEffect } from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useCharacter from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

function CardsContainer() {
  const { info, getAllCharacters, getCharactersFiltered } = useCharacter();

  const { byStatus } = useParams();

  useEffect(() => {
    byStatus ? getCharactersFiltered(byStatus) : getAllCharacters();
  }, [byStatus]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        {info.map((character) => (
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
  );
}

export default CardsContainer;
