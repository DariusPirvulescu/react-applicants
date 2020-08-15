import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Content from "../Content";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/page/" component={Content} />
        {/* <Route component={Error} /> */}
      </Switch>
    </div>
  );
};

export default App;
