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
  this.loadGitData(this.state.gitHubUserName).then( data => {
   console.log(data)
    return this.setState({results : data})
  })
  console.log(this.state.results)
} 

// Queries gitHub API for user data on starred contents
  loadGitData = (el) => {
    return API.getStarredRepos(el)
      .then(async (res) => {
        return Promise.all(
        res.data.map(
          async (el) => {
          let name = el.name 
          let url = el.html_url
          let id = el.id
          let description = el.description
          let readmelink = await this.loadReadMe(el)
          let readme = await this.loadData(readmelink)
          let gif = await this.loadGif(el)
          console.log(readme)
          let object = {
            name: name,
            gif: gif,
            readme: readme,
            url: url,
            id: id,
            description: description }
      
        return object
        })
        )
      })
      .catch(err => console.log(err));
  };

// Searches repository for gif file
loadGif = (e) => {
    return API.getReposContent(e.full_name)
    .then(res => {
     let gif = "" 
     res.data.map(el => {
     try {
     if (el.url.includes(".gif") === true) {
     return gif = this.cdnModify(el.download_url)
     }
     else {
     return ""
     }
    }  
     catch(err) {
       console.log(err)
     }
   })
   console.log(gif)
    return gif
  })
}

// Searches repository for readme file
loadReadMe = (e) => {
    return API.getReposContent(e.full_name)
    .then(res => {
     let readme = "" 
     res.data.map(el => {
     try {
     if (el.url.includes("README.md") === true) {
     readme = this.cdnModify(el.download_url)
     return readme
     }
    }  
     catch(err) {
       console.log(err)
     }
   })
   return readme
  })
}

// Method to return html as string from the link 
loadData = (url) => {
  return fetch(url)
    .then(function (response) {
      console.log(url + " -> " + response.ok);
      return response.text();
    })
}
// Routes files through content delivery network (CDN)

cdnModify = (link) => {
  // Prior modify https://raw.githubusercontent.com/eurbaezjr/day-scheduler/master/day-scheduler.gif
  // After modify https://cdn.jsdelivr.net/gh/eurbaezjr/day-scheduler/day-scheduler.gif

let string = link.replace("raw.githubusercontent.com", "cdn.jsdelivr.net/gh")
let stringTwo = string.replace("/master", "")
return stringTwo
}

// As user inputs information on the search form, set the state and trigger SearchProjects
  handleInputChange = event => {
    event.preventDefault();
    this.loadGitData(this.state.gitHubUserName).then( data => {
      console.log(data)
       return this.setState({results : data})
     })
     
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
  searchProjects = search => {
    var results = this.state.results.filter((result) => {
     return result.name.toLowerCase().includes(search.toLowerCase()) !== false || result.description.toLowerCase().includes(search.toLowerCase()) !== false
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
    url={result.url}
    key={result.id}
    name={result.name}
    image={result.gif}
    description={result.description}
    readme={result.readme}
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
