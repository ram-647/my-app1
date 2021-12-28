import React, { Component } from "react";
import "./css/bootstrap.css";
import "./css/bootstrap.min.css";
import "./css/Style.css";
import Footer from "./components/Footer";
import SearchPlan from "./components/SearchPlan";
import Header from "./components/common/Header"

const App = () => {
  //console.log(this.props.store)
  return (
    <div className="App">
      <Header/>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Warranty Component Administration </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Plan
          </li>
        </ol>
      </nav>
      <div className="container welcome-container">
        <div className="welcome">Welcome Prasad</div>
        <h4 className="search">Search Plan</h4>
      </div>

      <div className="container">
        <div className="row">
          <SearchPlan />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
