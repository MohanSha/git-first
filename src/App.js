import React, { useState } from "react";
import Select from "react-select";
import InputRange from "react-input-range";
import languages from "./assets/lang.json";
import fetchRepos from "./lib";
import "./App.css";

const App = () => {
  const [selectedLanguage, updateSelectedLanguage] = useState(null);
  const [stars, updateStars] = useState(50);

  const handleChange = selectedLanguage => {
    updateSelectedLanguage(selectedLanguage);
  };

  const exploreProjects = () => {
    console.log(stars, selectedLanguage);
    fetchRepos({ language: selectedLanguage.value, stars }, repos => {
      console.log(repos);
    });
  };

  return (
    <div className="container-fluid">
      <div className="hero-text jumbotron">
        Search beginner friendly projects on Github
      </div>
      <div className="selector-container">
        <div className="row">
          <div className="col-6">
            <span>max stars:</span>
            <InputRange
              maxValue={1000}
              minValue={10}
              value={stars}
              onChange={value => updateStars(value)}
            />
          </div>
          <div className="col-3">
            <span>language:</span>
            <Select
              value={selectedLanguage}
              onChange={handleChange}
              options={languages}
            />
          </div>
          <div className="col-3">
            <button type="button" id="search" onClick={exploreProjects}>
              search
            </button>
          </div>
        </div>
      </div>
      <div id="output" className="row" />
    </div>
  );
};

export default App;
