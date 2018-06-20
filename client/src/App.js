import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  state = {
    search: "",
    start: "",
    end: "",
    result: [],
    savedArticles: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ savedArticles: res.data })
      })
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => {this.loadArticles()
  })
    .catch(err => {
      console.log(err)
    });
  };

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ search: ""});
  };

  handleButton = () => {
    if (this.state.search != "") {
      API.getData(this.state.search)
      .then( res => {
        this.setState({ result:
        res.data.response.docs });
      })
      .catch (err => {
        console.log(err);
      })
    }
  }

  handleSave = (title, url, date, image) => {
    API.saveArticles({ title, url, data, image })
    .then(res => {
      this.loadArticles();
    })
    .catch(err => {
      console.log(err);
    })
  }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

render() {
  return (
    <div>
      <Nav />
      <Jumbo />
      <Search
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        handleButton={this.handleButton}
        search={this.state.search}
      />
      <Results
        result={this.state.result}
        handleSave={this.handleSave}
      />
      <Saved
        savedArticles={this.state.savedArticles}
        deleteArticle={this.deleteArticle}
      />
      <Footer />
    </div>
  );
}
}

export default App;
