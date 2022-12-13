import "./Body.css";
import Cards from "../Cards/Cards";
import { actions } from "../../redux";
import React, { useEffect } from "react";
import { Col, Spinner, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

function Body() {
  const dispatch = useDispatch();
  const { isLoading, cases, hasError, error, query } =
    useSelector((state) => state.case);

  useEffect(() => {
    dispatch(actions.fetchCases());
  }, [dispatch]);

  const filteredCases = cases?.filter((item) =>
    item.state.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      {!hasError ? (
        !isLoading ? (
          <Row>
            {filteredCases?.map((item, index) =>
              item.state !== "Total" ? (
                <Col key={index}>
                  <Cards item={item} />
                </Col>
              ) : (
                <p key={index}>
                  {"Total active Cases:" +
                    " " +
                    item.active +
                    ", " +
                    "Total Confirmed Cases:" +
                    " " +
                    item.confirmed +
                    ", " +
                    "Total Recovered Cases:" +
                    " " +
                    item.recovered +
                    ", " +
                    "Total Deaths:" +
                    " " +
                    item.deaths}
                </p>
              )
            )}
          </Row>
        ) : (
          <Spinner animation="grow" />
        )
      ) : (
        <>{error}</>
      )}
      {filteredCases?.length === 0 && (
        <div className="no-results">
          {" "}
          <h1>No results</h1>
        </div>
      )}
    </div>
  );
}

export default Body;
