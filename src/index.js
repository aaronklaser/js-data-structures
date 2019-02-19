import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Typography variant="h2" gutterBottom>
          JavaScript Data Structures
        </Typography>

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
