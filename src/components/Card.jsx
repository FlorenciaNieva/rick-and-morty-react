import { useContext, useState } from "react";
import { Card as CustomCard, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { FaRegStar, FaStar } from "react-icons/fa";
import { FavoritesContext } from "../context/favoritesContext";

function Card({ id, name, image, status, species, gender }) {
  const details = [status, species, gender];

  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext)

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    width: "33vw",
    margin: "10px",
    border: '1px solid #ccc',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: hovered ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
    position: "relative"
  };

  return (
    <CustomCard key={id} style={cardStyle}>
      <CustomCard.Body>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <CustomCard.Img src={image} />
          </Col>
          <div
            style={{
              position: "absolute",
              top: -2,
              fontSize: "25px",
              color: "green",
            }}
          >
            {isFavorite(id) ? (
              <FaStar onClick={() => removeFavorite(id)} />
            ) : (
              <FaRegStar
                onClick={() =>
                  addFavorite({
                    id,
                    name,
                    image,
                    species,
                    status,
                    gender,
                  })
                }
              />
            )}
          </div>
          <Col md={7}>
            <CustomCard.Title
              style={{
                fontFamily: "shlop",
                fontSize: "50px",
                color: "green",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {name}
            </CustomCard.Title>
            {details.map((detail, index) => (
              <h5
                key={index}
                style={{
                  fontFamily: "shlop",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                {detail}
              </h5>
            ))}
          </Col>
          <Button
            variant="success"
            onClick={() => navigate(`/details/${id}`)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            View details
          </Button>
        </Row>
      </CustomCard.Body>
    </CustomCard>
  );
}

export default Card;
