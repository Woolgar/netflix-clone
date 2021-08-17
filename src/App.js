import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* Nav */}
          <Route path="/">
            <Nav />
            {/* Banner */}
            <Banner />
            <Row
              title="Netflix Originals"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
              title="Reomance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div>
              <h2>Developed by Woolgar</h2>
              <p>
                This product uses the TMDb API but is not endorsed or certified
                by TMDb.
              </p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
