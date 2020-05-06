import React, { Component } from 'react';
import API from "../../utils/API";
import SearchForm from "./SearchForm";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import "./style.css";
import { element, object } from 'prop-types';

class ProjectSearch extends Component {
  state = {
    gitHubUserName: "eurbaezjr",
    search: "",
    starred: [],
    results: []
  }
  
// Start Github.API query prior DOM is ready
componentDidMount(){ 
  this.loadGitData(this.state.gitHubUserName)
} 

// Queries gitHub API for user data on starred contents
  loadGitData = (el) => {
    API.getStarredRepos(el)
      .then(res => {
        res.data.map(el => {
        return this.loadRepoContent(el)
        })
      })
      .catch(err => console.log(err));
      console.log(this.state.results)
  };


// Queries gitHub API for the content in each repo in the starred content
loadRepoContent = (e) => {
 let obj = {
   repoName: e.name,
   gifURL: "",
   readMeContent: "" 
 }
   API.getReposContent(e.full_name)
   .then(res => { 
    res.data.map(el => {
    if (el.url.includes(".gif") === true || el.url.includes("README.md") === true) {
    if (el.url.includes(".gif") === true) {
    return obj.gifURL = el.html_url
    }
    else if (el.url.includes("README.md") === true){
    return  obj.readMeContent = el.download_url
    }
  }
  })
}).catch(err => console.log(err));

return this.state.results.push(obj)

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
  // searchProjects = search => {
  //   this.loadGitData(this.gitHubUserName)
  //   const results = this.state.results.filter((result) => {
  //    return result.name.toLowerCase().includes(search.toLowerCase()) !== false || result.occupation.toLowerCase().includes(search.toLowerCase()) !== false  || result.location.toLowerCase().includes(search.toLowerCase()) !== false 
  //   })
  //   this.setState({ results });
    
  // };

  render() {
    return (

      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Wrapper>
          </Wrapper>
      </div>
    )
  }
}

export default ProjectSearch

{/* <div className='row'>
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
</div> */}