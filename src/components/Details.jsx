import { useEffect, useContext } from "react";
import CircleLoader from "react-spinners/ClipLoader";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FavoritesContext } from "../context/favoritesContext";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
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
                  <div
                    style={{
                      position: "absolute",
                      top: -5,
                      left: 650,
                      fontSize: "25px",
                      color: "green",
                    }}
                  >
                    {isFavorite(info.id) ? (
                      <FaStar onClick={() => removeFavorite(info.id)} />
                    ) : (
                      <FaRegStar
                        onClick={() =>
                          addFavorite({
                            id: info.id,
                            name: info.name,
                            image: info.image,
                            species: info.species,
                            status: info.status,
                            gender: info.gender,
                          })
                        }
                      />
                    )}
                  </div>
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
