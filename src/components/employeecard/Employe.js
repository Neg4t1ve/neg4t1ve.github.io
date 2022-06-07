import React, { useContext } from "react";
import "./employe.scss";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card.js";

function Employe() {
  return (
    <Container
      className="About__container"
      fluid
      style={{
        marginTop: "118px",
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
      }}
    >
      <Row style={{ justifyContent: "space-around", marginBottom: "2rem" }}>
        <h1 className="title">About Us</h1>
        <p style={{ maxWidth: "60%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          quibusdam iusto officiis totam modi perferendis qui sit fugit ad
          beatae. Esse saepe voluptates, eum rerum maiores accusamus totam sint
          unde.
        </p>
      </Row>
      <Row>
        <h2 className="title">Our crew</h2>
        <h3 className="subtitle">Top-management</h3>

        <Card position="ceo" />

        <h3 className="subtitle" style={{ marginTop: "1rem" }}>
          Management
        </h3>

        <Card position="manager" />

        <h3 className="subtitle" style={{ marginTop: "1rem" }}>
          Workers
        </h3>

        <Card position="worker" />
      </Row>
    </Container>
  );
}

export default Employe;

{
  /* <div className="main">
<div className="ceo" style={{ color: "blue" }}>
  {employees
    .filter((employe) => employe.position.toLowerCase() === "ceo")
    .map((employe) => (
      <div>
        <img
          src={employe.photo}
          alt={employe.name}
          style={{ height: "100px" }}
        />
        <h2>{employe.name}</h2>
        <h3>{employe.position}</h3>
      </div>
    ))}
</div>

<div className="manager" style={{ color: "bisque" }}>
  {employees
    .filter((employe) => employe.position.toLowerCase() === "manager")
    .map((employe) => (
      <div>
        <img
          src={employe.photo}
          alt={employe.name}
          style={{ height: "100px" }}
        />
        <h2>{employe.name}</h2>
        <h3>{employe.position}</h3>
      </div>
    ))}
</div>
<div className="manager">
  {employees
    .filter((employe) => employe.position.toLowerCase() === "worker")
    .map((employe) => (
      <div>
        <img
          src={employe.photo}
          alt={employe.name}
          style={{ height: "100px" }}
        />
        <h2>{employe.name}</h2>
        <h3>{employe.position}</h3>
      </div>
    ))}
</div>
</div> */
}
