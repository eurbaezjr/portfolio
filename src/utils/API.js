import axios from "axios";

// Export an object containing methods we'll use for accessing repos API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  getStarredRepos: function(gitHubUserName) {
    return axios.get("https://api.github.com/users/" + gitHubUserName + "/starred");
  },
  getReposContent: function(fullRepoName) {
    return axios.get("http://api.github.com/repos/" + fullRepoName + "/contents");
  }
};

