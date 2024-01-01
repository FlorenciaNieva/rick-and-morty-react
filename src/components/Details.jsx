import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/ClipLoader";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";

export default function Details() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getCharacter() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );
      const data = await response.json();
      setTimeout(() => {
        setCharacter(data);
        setLoading(false);
      }, 1000);
    }
    getCharacter();
  }, []);

  return (
    <>
      {loading ? (
        <Row className="justify-content-center">
          <Col className="text-center">
            <CircleLoader
              color="green"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
            />
          </Col>
        </Row>
      ) : (
        <>
          <Card
            key={character.id}
            style={{
              width: "50vw",
              margin: "auto",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Card.Body>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  <Card.Img src={character.image} />
                </Col>
                <Col md={7} >
                  <Card.Title
                    style={{
                      fontFamily: "shlop",
                      fontSize: "50px",
                      color: "green",
                    }}
                  >
                    Name: {character?.name}
                  </Card.Title>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Status: {character?.status}
                  </h5>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Gender: {character?.gender}
                  </h5>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Origin: {character.origin?.name}
                  </h5>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Location: {character.location?.name}
                  </h5>
                  <Button
                    onClick={() => navigate("/")}
                    variant="outline-success"
                  >
                    Go back
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}
