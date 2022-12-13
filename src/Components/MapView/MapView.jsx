import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MapView.css";
import { NavLink } from "react-router-dom";
import DatamapsIndia from "react-datamaps-india";
import { fetchCases } from "../../redux/actions/action";
import { Button, Container } from "react-bootstrap";

function MapView() {
  const { cases } = useSelector((state) => state.case);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCases());
  }, [dispatch]);

  let obj = {};
  cases.forEach((eachstate) => {
    let stateName = "";
    if (eachstate.state === "Andaman and Nicobar Islands") {
      stateName = "Andaman & Nicobar Island";
    } else if (eachstate.state === "Arunachal Pradesh") {
      stateName = "Arunanchal Pradesh";
    } else if (eachstate.state === "Jammu and Kashmir") {
      stateName = "Jammu & Kashmir";
    } else {
      stateName = eachstate.state;
    }
    obj[stateName] = {
      name: stateName,
      active: eachstate.value,
      deaths: eachstate.deaths,
      Confirmed: eachstate.confirmed,
      recovered: eachstate.recovered,
    };
  });
  return (
    <Container
      className="india-map w-100 d-flex justify-content-between mx-auto my-auto"
      style={{ cursor: "pointer", width: "100vw", transform: "scale(0.8)" }}
    >
      <Button variant="outline-info" as={NavLink} to="/" style={{ zIndex: "100", height: '45px' }} size="md">
        Back to home
      </Button>
      <h1 className="display-1 mx-auto">
        Covid Cases <br /> Map view
      </h1>
      <DatamapsIndia
        style={{
          backgroundColor: "blue",
          position: "fixed",
          top: "-50px"
        }}
        regionData={obj}
        hoverComponent={({ value }) => {
          return (
            <p>
              <p>{value.name}</p>
              <p>Active: {value.value}</p>
              <p>Death's: {value.deaths}</p>
              <p>Confirmed: {value.confirmed}</p>
              <p>Recovered: {value.recovered}</p>
            </p>
          );
        }}
        mapLayout={{
          legendTitle: "",
          startColor: "#FFDAB9",
          endColor: "#FF6347",
          hoverTitle: "Count",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "green",
        }}
      />
    </Container>
  );
}

export default MapView;

// let obj = {};
// const covidDetails = async () => {
//   const stateURL = "https://data.covid19india.org/data.json";
//   const options = {
//     method: "GET",
//   };

//   let response = await fetch(stateURL, options);
//   let jsonData = await response.json();
//   let stateWiseData = jsonData?.statewise;
//   console.log(jsonData?.statewise);
//   stateWiseData.forEach((eachstate) => {
//     let stateName = "";
//     if (eachstate.state === "Andaman and Nicobar Islands") {
//       stateName = "Andaman & Nicobar Island";
//     } else if (eachstate.state === "Arunachal Pradesh") {
//       stateName = "Arunanchal Pradesh";
//     } else if (eachstate.state === "Jammu and Kashmir") {
//       stateName = "Jammu & Kashmir";
//     } else {
//       stateName = eachstate.state;
//     }
//     obj[stateName] = {
//       name: stateName,
//       value: eachstate.active,
//       deaths: eachstate.deaths,
//       Confirmed: eachstate.confirmed,
//       recovered: eachstate.recovered,
//     };
//   });
//   console.log(obj);
// };

// covidDetails();
