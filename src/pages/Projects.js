import React from 'react';
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ProjectCard from "../components/ProjectCard";
import Row from "../components/Row";
import Hero from "../components/Hero";
import AvatarIcon from "../components/AvatarIcon"
import Col from "../components/Col";
import skillsJSON from "./skills"
import Container from '../components/Container';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitHubUserName: "eurbaezjr",
      BackgroundImage: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      search: "",
      apiResults: [],
      results: [],
      skills: skillsJSON
    }

    this.handleClick = this.handleClick.bind(this)
  }

  // Start Github.API query prior DOM is ready
  componentDidMount() {
    this.loadGitData(this.state.gitHubUserName).then(data => {
      console.log(data)
      return this.setState({ results: data, apiResults: data })
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
                description: description
              }

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
              return gif = el.download_url
            }
            else {
              return ""
            }
          }
          catch (err) {
            return console.log(err)
          }
        })
        console.log(gif)
        return gif
      })
  }

  // Searches repository for readme file
  loadReadMe = (e) => {
    return API.getReposContent(e.full_name).then(res => {
        let readme = ""
        res.data.map(el => {
          try {
            if (el.url.includes("README.md") === true) {
              readme = this.cdnModify(el.download_url)
              return readme
            }
          }
          catch (err) {
           return console.log(err)
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
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    });
    setTimeout(() => {
      return this.searchProjects(this.state.search);
    }, 1000)
  }

  // Filter for all projects based on user input data
  searchProjects = async search => {
    this.setState({search:search})
    
    var results = await this.state.apiResults.filter((result) => {
      return result.name.toLowerCase().includes(search.toLowerCase()) !== false || result.description.toLowerCase().includes(search.toLowerCase()) !== false || result.readme.toLowerCase().includes(search.toLowerCase()) !== false
    })

    this.setState({ results : results });
  };

  handleClick = (e) => {
  this.handleInputChange(e) 
  // if user clicks on box, trigger search 
  return this.searchProjects(e.target.name)
  }

  render() {
    return (

      <div>
        <Hero backgroundImage={this.state.BackgroundImage}>
        <AvatarIcon/>
       
        <Container>
          <Row>
            <Col size="12">
          <SearchForm 
            class-name="justifiy-content-center"
            search={this.state.search}
            value={this.state.search}
            handleInputChange={this.handleInputChange}
           />
           </Col>
          </Row>
          </Container>
           <Container>
            <Row>

              {this.state.results.map(result => (
               <Col key={result.id} size="xl-12 lg-12">
                <ProjectCard
                  id={result.id}
                  url={result.url}
                  key={result.id}
                  name={result.name}
                  image={result.gif}
                  description={result.description}
                >
                  {result.readme}
                </ProjectCard>
                </Col>

              ))}

            </Row>
            </Container>
      
        </Hero>
      </div>
    )
  }
}


export default Projects