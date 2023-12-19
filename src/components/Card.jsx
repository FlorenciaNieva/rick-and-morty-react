import { Card as CustomCard, Row, Col } from "react-bootstrap";

function Card({ id, name, image, status, species, gender }) {
  const details = [status, species, gender];
  
  return (
    <CustomCard key={id} style={{ width: "35vw", margin: "10px" }}>
      <CustomCard.Body>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <CustomCard.Img
              src={image} />
          </Col>
          <Col md={7}>
          <CustomCard.Title style={{ fontFamily: "shlop", fontSize:"50px", color: "green", textAlign: "center" }} >{name}</CustomCard.Title>
          {details.map((detail) => <h5 style={{ fontFamily: "shlop", fontSize:"30px", textAlign: "center" }}>{detail}</h5>)}
          </Col>
        </Row>
      </CustomCard.Body>
    </CustomCard>
    );
}

export default Card;

