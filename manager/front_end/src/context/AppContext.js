import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  results: "",
  error: null,
  loading: false,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getResult = async () => {
    try {
      const res = await axios.get("/api/scraper/result");
      dispatch({
        type: "GET_RESULT",
        payload: res.data,
      });
    } catch (err) {
      if (err) console.log(err);
    }
  };

  const createSearch = async (input) => {
    await dispatch({ type: "RESULT_LOADING" });
    try {
      const res = await axios.post("/api/scraper/search", input);
      dispatch({
        type: "CREATE_SEARCH",
        payload: res.data,
      });
    } catch (err) {
      if (err) console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        results: state.results,
        error: state.error,
        loading: state.loading,
        createSearch,
        getResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
