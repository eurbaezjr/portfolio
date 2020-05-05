import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalTimelineContent from './resources/HorizontalTimelineContent';
import PortfolioInfo from './content';
import "./style.css";
import API from "../../utils/API";

// Directly importing the minified bootstrap css to avoid all the painful
// steps it will take otherwise to get it to work.
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MyHorizontalTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0, gitHubUserName: "eurbaezjr",
    results: []};
  }

  // state = {
  //   gitHubUserName: "eurbaezjr",
  //   data: [],
  // };

  // componentDidMount() {
  // }
  
 loadGitData(el) {
    API.getStarredRepos(el)
    .then(res =>
      this.setState({
        results: res.data
      }, console.log(res.data))
    ).catch(err => console.log(err));
  };

  componentWillMount() {
    this.loadGitData(this.state.gitHubUserName);
    this.data = PortfolioInfo.map((item, index) => {
      return ({
        date: item.date,
        component: (
          <div className='container' key={index}>
            <h1>{ `The Elder Scrolls ${index + 1}:`}</h1>
            <h2>{ item.subtitle }</h2>
            <img src={item.avatarURL}/>
            <hr />
            <p>{ item.content}</p>
            <hr />
          </div>
        )
      });
    });
  }

  render() {

    return (
      <div>
      <HorizontalTimelineContent
        content={this.data} />
         </div>
    );
  }
}

export default MyHorizontalTimeline
