import axios from "axios";
import {
  FETCH_CASES_LOADING,
  FETCH_CASES_SUCCESS,
  FETCH_CASES_FAILURE,
  FETCH_DISTRICT_CASES_LOADING,
  FETCH_DISTRICT_CASES_SUCCESS,
  FETCH_DISTRICT_CASES_FAILURE,
  SORT_CASES,
  SEARCH_CASES,
} from "../types/types";

// STATE WISE CASES

export const fetchCasesLoading = () => {
  return {
    type: FETCH_CASES_LOADING,
  };
};

export const fetchCasesSuccess = (cases) => {
  return {
    type: FETCH_CASES_SUCCESS,
    payload: cases,
  };
};

export const fetchCasesFailure = (error) => {
  return {
    type: FETCH_CASES_FAILURE,
    payload: error,
  };
};

// DISTRICT WISE CASES

export const fetchDistrictCasesLoading = () => {
  return {
    type: FETCH_DISTRICT_CASES_LOADING,
  };
};

export const fetchDistrictCasesSuccess = (cases) => {
  return {
    type: FETCH_DISTRICT_CASES_SUCCESS,
    payload: cases,
  };
};

export const fetchDistrictCasesFailure = (error) => {
  return {
    type: FETCH_DISTRICT_CASES_FAILURE,
    payload: error,
  };
};

// search state

export const searchCases = (keyword) => {
  return {
    type: SEARCH_CASES,
    payload: keyword,
  };
};

// UPDATING CASES

export const sortConfirmedCases = () => {
  return {
    type: SORT_CASES
  };
};

export const fetchCases = () => {
  return (dispatch) => {
    const getData = async () => {
      try {
        dispatch(fetchCasesLoading());
        const { data } = await axios.get(
          "https://data.covid19india.org/data.json"
        );
        dispatch(fetchCasesSuccess(data.statewise));
      } catch (error) {
        dispatch(fetchCasesFailure(error?.message));
      }
    };
    getData();
  };
};

export const fetchDistrictCases = (state) => {
  return (dispatch) => {
    const getDistrictData = async () => {
      try {
        dispatch(fetchDistrictCasesLoading());
        const {data} = await axios.get(
          "https://data.covid19india.org/state_district_wise.json"
        );
        dispatch(fetchDistrictCasesSuccess(data[state].districtData));
      } catch (error) {
        dispatch(fetchDistrictCasesFailure(error?.message));
      }
    };
    getDistrictData();
  };
};
