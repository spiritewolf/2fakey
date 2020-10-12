import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Display = () => {
  const { results, loading } = useContext(AppContext);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   if (loading) {
  //     console.log("loading...");
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }, [loading]);
  return (
    <div className="container">
      {loading ? (
        <>
          <h1>Getting source...</h1>
          <p>(May take up to 30 seconds)</p>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : null}
      <h2>Result:</h2>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
          <h2>Source:</h2> {results.source}
        </li>
        <li class="list-group-item">
          <h2>Summary:</h2> {results.result}
        </li>
      </ul>
    </div>
  );
};
