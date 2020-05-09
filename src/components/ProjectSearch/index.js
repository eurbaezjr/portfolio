import React from 'react';
import API from "../../utils/API";
import SearchForm from "./SearchForm";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import "./style.css";

class ProjectSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    gitHubUserName: "eurbaezjr",
    search: "",
    results: []
  }}
  
// Start Github.API query prior DOM is ready
componentDidMount(){ 
  this.loadGitData(this.state.gitHubUserName)
} 

// Queries gitHub API for user data on starred contents
  loadGitData = (el) => {
    API.getStarredRepos(el)
      .then(res => {
        let arr = [];
        res.data.map(el => {
         let object = this.loadRepoContent(el)
        return arr.push(object)
        })
        console.log(arr)
        return this.setState({results: arr})
      })
      .catch(err => console.log(err));
  };
// Queries gitHub API for the content in each repo in the starred content
loadRepoContent = (e) => {
 let obj = {
   name: e.name,
   gif: "",
   readme: "", 
   url: e.html_url,
   id: e.id,
   description: e.description
 }
   API.getReposContent(e.full_name)
   .then(res => { 
    res.data.map(el => {
    if (el.url.includes(".gif") === true) {
     let gif = this.cdnModify(el.download_url)  
    return obj.gif = gif
    }
    else if (el.url.includes("README.md") === true){
     let readme =  this.cdnModify(el.download_url)
    return  obj.readMeContent = readme
    }
    else {
      return ""
    }
  })
}).catch(err => console.log(err));

return obj

}
// routes gif and README through Content Delivery Network (CDN)
cdnModify = (link) => {
  // Prior modify https://raw.githubusercontent.com/eurbaezjr/day-scheduler/master/day-scheduler.gif
  // After modify https://cdn.jsdelivr.net/gh/eurbaezjr/day-scheduler/day-scheduler.gif

let string = link.replace("raw.githubusercontent.com", "cdn.jsdelivr.net/gh")
let stringTwo = string.replace("/master", "")
return stringTwo
}
// As user inputs information on the search form, set the state and trigger SearchProjects
  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    });
    event.preventDefault();
    setTimeout(() => {
     return this.searchProjects(this.state.search);
    }, 1000)
  }

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
        <div className='row'>
{this.state.results.map(result => (
  <ProjectCard
    id={result.id}
    url={result.url}
    key={result.id}
    name={result.name}
    image={result.gif}
    description={result.description}
    >
  </ProjectCard>
))}
</div>
          </Wrapper>
      </div>
    )
  }
}

export default ProjectSearch
