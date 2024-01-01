import { Card as CustomCard, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function Card({ id, name, image, status, species, gender }) {
  const details = [status, species, gender];
  const navigate = useNavigate();
  
  return (
    <CustomCard key={id} style={{ width: "33vw", margin: "5px" }} onClick={() => navigate(`/details/${id}`)}>
      <CustomCard.Body>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <CustomCard.Img
              src={image} />
          </Col>
          <Col md={7}>
            <CustomCard.Title style={{ fontFamily: "shlop", fontSize:"50px", color: "green", textAlign: "center" }} >{name}</CustomCard.Title>
            {details.map((detail, index) => <h5 key={index} style={{ fontFamily: "shlop", fontSize:"30px", textAlign: "center" }}>{detail}</h5>)}
          </Col>
        </Row>
      </CustomCard.Body>
    </CustomCard>
    );
}

export default Card;

