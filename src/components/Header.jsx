import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/NavLink';

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
          position: "relative"
        }}
      >
        <h1
          style={{
            fontFamily: "shlop",
            fontSize: "500%",
            color: "green",
            textAlign: "center",
            textShadow: "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
          }}
        >Rick and Morty</h1>
        <div style={{
          position: "absolute",
          top: 25,
          right: 30,
        }}>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={Nav.Link}>Filter for…</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item><Link to="/">Alls</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/status/dead">Dead</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/status/alive">Alive</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/status/unknown">Unknown</Link></Dropdown.Item>
            </Dropdown.Menu>
            <Link to="/favorites" style={{ marginLeft: "15px" }}>Go to favorites</Link>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
