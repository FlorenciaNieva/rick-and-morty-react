import { useEffect } from "react";
import CircleLoader from "react-spinners/ClipLoader";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info, loading, getOneCharacter } = useCharacter();

  useEffect(() => {
    getOneCharacter(id);
  }, [id]);

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
            key={info.id}
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
                  <Card.Img src={info.image} />
                </Col>
                <Col md={7}>
                  <Card.Title
                    style={{
                      fontFamily: "shlop",
                      fontSize: "50px",
                      color: "green",
                    }}
                  >
                    Name: {info.name}
                  </Card.Title>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Status: {info.status}
                  </h5>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Gender: {info.gender}
                  </h5>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Origin: {info.origin.name}
                  </h5>
                  <h5
                    style={{
                      fontFamily: "shlop",
                      fontSize: "30px",
                    }}
                  >
                    Location: {info.location.name}
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
