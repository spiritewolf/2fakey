import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Search = () => {
  const { createSearch } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = { search: search };
    createSearch(input);
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Search for thing</label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter search"
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
