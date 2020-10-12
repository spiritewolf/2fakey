import React from "react";
import "@babel/polyfill";
import ReactDOM from "react-dom";
import { AppProvider } from "./context/AppContext";
import { Header } from "./layout/Header";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Dashboard />
    </AppProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
