import "./App.css";
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {

pageSize = 5;

  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact
              path="/home"
              element={<News key={'home'} pageSize = {this.pageSize} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/business"
              element={<News key={'business'} pageSize = {this.pageSize} country="in" category="business" />}
            />
          </Routes>


          <Routes>
            <Route exact
              path="/entertainment"
              element={<News key={'entertainment'} pageSize = {this.pageSize} country="in" category="entertainment" />}
            />
          </Routes>      

          <Routes>
            <Route exact
              path="/general"
              element={<News key={'general'} pageSize = {this.pageSize} country="in" category="general" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/health"
              element={<News key={'health'} pageSize = {this.pageSize} country="in" category="health" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/science"
              element={<News key={'science'} pageSize = {this.pageSize} country="in" category="science" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/sports"
              element={<News key={'sports'} pageSize = {this.pageSize} country="in" category="sports" />}
            />
          </Routes>

          <Routes>
            <Route exact
              path="/technology"
              element={<News key={'technology'} pageSize = {this.pageSize} country="in" category="technology" />}
            />
          </Routes>


        </Router>
      </div>
    );
  }
}
