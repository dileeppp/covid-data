import "./Menubar.css";
import React from "react";
import { actions } from "../../redux";
import { NavLink, useParams } from "react-router-dom";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Menubar = () => {
  const { state } = useParams()
  const dispatch = useDispatch();
  const { isSorted } = useSelector((state) => state.case);

  let searchKeyWord = "";


  const handleSearch = (e) => {
    searchKeyWord = e.target.value;
    dispatch(actions.searchCases(searchKeyWord));
  };

  const handleSortOrder = () => {
    dispatch(actions.sortConfirmedCases());
  };

  const handleNormalOrder = () => {
    dispatch(actions.fetchCases())
    if (state) {
      dispatch(actions.fetchDistrictCases(state))
    }
  };

  return (
    <div className="menubar-container d-flex justify-content-around align-items-center">
      <InputGroup className="my-auto" id="search-bar">
        <Form.Control
          placeholder="search state - example: Andhra Pradesh"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleSearch}
        />
      </InputGroup>
      <div className="menu-btns">
        <Button
          variant="outline-secondary"
          size="md"
          onClick={isSorted ? handleNormalOrder : handleSortOrder}
        >
          {!isSorted ? "Sort by Confirmed Cases" : "Actual order"}
        </Button>
        <Button variant="outline-info" size="md" as={NavLink} to="/mapView">
          {" "}
          Map-view
        </Button>
      </div>
    </div>
  );
};

export default Menubar;
