import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import { Search } from "./Search";
import { Display } from "./Display";

export const Dashboard = () => {
  const { getResult } = useContext(AppContext);

  useEffect(() => {
    getResult();
  }, []);
  return (
    <>
      <Search />
      <Display />
    </>
  );
};
