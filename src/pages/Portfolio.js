import React, { Component } from "react";
import MyHorizontalTimeline from "../components/MyHorizontalTimeline"
import API from "../utils/API";

function Portfolio() {

  var state = {
    gitHubUser: "eurbaezjr",
    data: [],
  };

  loadGitData(state.gitHubUser);

  async function loadGitData() {
    API.getStarredRepos()
      .then(res =>
        state.data = res.data
      )
      .catch(err => console.log(err));
  };

  console.log("string version:" + JSON.stringify(state.data));
  console.log("object version:" + state.data);

  return (
    <div>
      <MyHorizontalTimeline />
    </div>
  );
}

export default Portfolio;
