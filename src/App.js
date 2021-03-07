import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import MoviesLoader from "./components/MoviesLoader";
import MovieDetailsLoader from "./components/MovieDetailsLoader";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/movie/:movieId">
            <MovieDetailsLoader />
          </Route>
          <Route path="/movies">
            <MoviesLoader />
          </Route>
          <Route>
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
