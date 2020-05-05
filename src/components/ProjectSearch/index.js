import React, { Component } from 'react';
import API from "../../utils/API";
import SearchForm from "./SearchForm";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import "./style.css";


class ProjectSearch extends Component {
  state = {
    gitHubUserName: "eurbaezjr",
    search: "",
    results: [],
  }

// Start Github.API query prior DOM is ready
  componentWillMount() { 
  this.loadGitData(this.gitHubUserName)
} 

// Queries gitHub API for user data on starred contents
loadGitData = (el) => {
  API.getStarredRepos(el)
  .then(res =>
    this.setState({
      results: res.data
    }, console.log(res.data))
  ).catch(err => console.log(err));
};

// get repo contents. Finish path for this
loadRepoContent = (data) => {
  API.getReposContent(data.full_name)
  .then(res =>
    // YOU LEFT HERE CONTINUE FROM HERE!
    this.setState({
      results: res.data
    }, console.log(res.data))
  ).catch(err => console.log(err));
}

// As user inputs information on the search form, set the state and trigger SearchProjects
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    event.preventDefault();
    setTimeout(() => {
     return this.searchProjects(this.state.search);
    }, 1000);
  };

// Filter for all projects based on user input data
  searchProjects = search => {
    this.loadGitData(this.gitHubUserName)
    const results = this.state.results.filter((result) => {
     return result.name.toLowerCase().includes(search.toLowerCase()) !== false || result.occupation.toLowerCase().includes(search.toLowerCase()) !== false  || result.location.toLowerCase().includes(search.toLowerCase()) !== false 
    })
    this.setState({ results });
    
  };

  render() {
    return (

      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Wrapper>
        <div className='row'>
          {this.state.results.map(result => (
            <ProjectCard
              id={result.id}
              url={result.html_url}
              key={result.id}
              name={result.name}
              image={result.image}
              occupation={result.occupation}
              location={result.location}>
            </ProjectCard>
          ))}
          </div>
          </Wrapper>
      </div>
    )
  }
}

export default ProjectSearch