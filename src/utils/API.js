import axios from "axios";

// Export an object containing methods we'll use for accessing repos API

export default {


  getStarredRepos: function(gitHubUserName) {
    return axios.get("https://api.github.com/users/" + gitHubUserName + "/starred", 
    headers = {
      'Content-type': 'text/plain',
      "Access-Control-Allow-Origin": "https://eurbaezjr.github.io/portfolio/projects"
    }
    );
  },
  getReposContent: function(fullRepoName) {
    return axios.get("https://api.github.com/repos/" + fullRepoName + "/contents",
    headers = {
      'Content-type': 'text/plain',
      "Access-Control-Allow-Origin": "https://eurbaezjr.github.io/portfolio/projects"
    }
    );
  }
};
