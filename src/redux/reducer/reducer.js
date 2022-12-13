import {
  FETCH_CASES_FAILURE,
  FETCH_CASES_LOADING,
  FETCH_CASES_SUCCESS,
  SEARCH_CASES,
  SORT_CASES,
  FETCH_DISTRICT_CASES_LOADING,
  FETCH_DISTRICT_CASES_SUCCESS,
  FETCH_DISTRICT_CASES_FAILURE,
} from "../types/types";

const initailState = {
  cases: null,
  isLoading: false,
  districtCases: {},
  isSorted: false,
  hasError: false,
  error: "",
  query: "",
};

export const casesReducer = (state = initailState, actions) => {
  switch (actions.type) {
    case FETCH_CASES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CASES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cases: actions.payload,
        isSorted: false,
      };
    case FETCH_CASES_FAILURE:
      return {
        ...state,
        hasError: true,
        error: actions.payload,
        cases: [],
      };
    case FETCH_DISTRICT_CASES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DISTRICT_CASES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        districtCases: actions.payload,
      };
    case FETCH_DISTRICT_CASES_FAILURE:
      return {
        ...state,
        hasError: true,
        error: actions.payload,
        cases: [],
        districtCases: {},
      };

    case SEARCH_CASES:
      return {
        ...state,
        query: actions.payload,
      };
    case SORT_CASES:
      const sortByconfirmed = (obj) => {
        const order = [],
          res = {};
        Object.keys(obj).forEach((key) => {
          return (order[obj[key]["confirmed"] - 1] = key);
        });
        order.forEach((key) => {
          res[key] = obj[key];
        });
        return res;
      };
      return {
        ...state,
        isSorted: true,
        districtCases: Object.assign(sortByconfirmed(state.districtCases), {}),
        cases: [].concat(state.cases).sort((a, b) => a.confirmed - b.confirmed),
      };

    default:
      return state;
  }
};
