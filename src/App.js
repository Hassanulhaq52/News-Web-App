import "./App.css";
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact
              path="/home"
              element={<News key={'home'} pageSize={5} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/business"
              element={<News key={'business'} pageSize={5} country="in" category="business" />}
            />
          </Routes>


          <Routes>
            <Route exact
              path="/entertainment"
              element={<News key={'entertainment'} pageSize={5} country="in" category="entertainment" />}
            />
          </Routes>      

          <Routes>
            <Route exact
              path="/general"
              element={<News key={'general'} pageSize={5} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/health"
              element={<News key={'health'} pageSize={5} country="in" category="health" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/science"
              element={<News key={'science'} pageSize={5} country="in" category="science" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/sports"
              element={<News key={'sports'} pageSize={5} country="in" category="sports" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/technology"
              element={<News key={'technology'} pageSize={5} country="in" category="technology" />}
            />
          </Routes>


        </Router>
      </div>
    );
  }
}
