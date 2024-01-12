import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function Header() {
  return (
    <>
      <header
        style={{
          backgroundImage:
            "url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?tf=3840x)",
          height: "300px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "shlop",
            fontSize: "500%",
            color: "green",
            textAlign: "center",
            textShadow:
              "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
          }}
        >Rick and Morty</h1>
        <ListGroup horizontal className="d-flex justify-content-center">
          <ListGroup.Item>
            <Link to="/status/dead">Dead</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/status/alive">Alive</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/status/unknown">Unknown</Link>
          </ListGroup.Item>
        </ListGroup>
      </header>
    </>
  );
}
