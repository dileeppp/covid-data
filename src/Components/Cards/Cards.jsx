import React, { useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Popup from "../Popup/Popup";

const Cards = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Popup show={show} handleClose={handleClose} />
      <Card
        border="danger"
        bg={"light"}
        style={{
          color: "black",
          width: "19rem",
          height: "15rem",
          marginBottom: "30px",
        }}
        className="mb-2 single-card"
      >
        <Card.Header >{item.state.slice(0,30)}</Card.Header>
        <Card.Body className="card-body my-auto">
          <div className="cases-container mb-3 mt-auto">
            <Row className="my-auto">
              <Col className="cases me-2 mb-2">
                <span>
                  Active: <br />
                  {item.active}
                </span>
              </Col>
              <Col className="cases mb-2">
                <span>confirmed: {item.confirmed}</span>
              </Col>
            </Row>
            <Row>
              <Col className="cases me-2">
                <span>
                  Death Cases: <br />
                  {item.deaths}
                </span>
              </Col>
              <Col className="cases">
                <span>
                  Recovered: <br />
                  {item.recovered}
                </span>
              </Col>
            </Row>
          </div>

          <div className="d-flex">
            <Card.Link
              as={Button}
              variant="danger"
              size="sm"
              className="card-btns"
              onClick={handleShow}
            >
              Share
            </Card.Link>
            <Card.Link
              as={Button}
              variant="info"
              size="sm"
              className="card-btns justify-content-between w-100"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/district/${item.state}`}
              >
                View District details
              </Link>
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
