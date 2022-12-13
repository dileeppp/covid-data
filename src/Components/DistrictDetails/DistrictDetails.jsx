import "./DistrictDetails.css";
import Popup from "../Popup/Popup";
import { actions } from "../../redux";
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Card, Container, Button } from "react-bootstrap";

function DistrictDetails() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state } = useParams();
  const dispatch = useDispatch();
  const { isLoading, query, hasError, error, districtCases } = useSelector(
    (state) => state.case
  );

  const districtCasesKeys = Object.keys(districtCases);

  const searchDistrictCases = districtCasesKeys.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    dispatch(actions.fetchDistrictCases(state));
  }, [dispatch]);


  return (
    <>
      <Popup show={show} handleClose={handleClose} />
      <div className="state-header d-flex align-items-center justify-content-around">
        <Button variant="danger" as={NavLink} to="/" size="md">Back to Home</Button>
        <h1 className="">{state}</h1>
        <hr />
      </div>
      <Container className="mt-4">
        {!isLoading ? (
          !hasError ? (
            <Row>
              {searchDistrictCases.map((item, index) => (
                <Col key={index}>
                  <Card
                    bg={"info"}
                    key={index}
                    text={"black"}
                    style={{ width: "18rem" }}
                    className="mb-2 disrict-card"
                  >
                    <Card.Header>
                      {item}
                    </Card.Header>
                    <Card.Body>
                      <div className="cases-container mb-3 mt-auto">
                        <Row className="my-auto">
                          <Col className="district-cases me-2 mb-2">
                            <span>
                              Active: <br />
                              {districtCases[item].active}
                            </span>
                          </Col>
                          <Col className="district-cases mb-2">
                            <span>
                              Confirmed: <br /> {districtCases[item].active}
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="district-cases me-2">
                            <span>
                              Deceased: <br /> {districtCases[item].deceased}
                            </span>
                          </Col>
                          <Col className="district-cases">
                            <span>
                              Recovered: <br /> {districtCases[item].recovered}
                            </span>
                          </Col>
                        </Row>
                      </div>
                      <Button variant="outline-success" onClick={handleShow}>Share</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <></>
          )
        ) : (
          error
        )}
      </Container>
    </>
  );
}

export default DistrictDetails;
