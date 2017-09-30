import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="hero is-dark is-fullheight">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/coin/:id" component={CoinDetails} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
