import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Content from "../Content";
import Footer from "../Footer";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/page/" component={Content} />
        <Route path="/">
          <Redirect to="/page" />
        </Route>
        {/* <Route component={Error} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
