import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0bfa6c093c274e20b6426afaa0253f4d')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          articles: myJson.articles
          // console.log(myJson);

        });
      });
   
  }

  render() {
    console.log(this.state);
    // return(
    //   <div>
    //     <h1> Breaking News</h1>
    //   </div>
    // ) 
    return (
     
      <div className="App">
        
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <h2 style={{ textAlign: 'left' }}>
                {item.title}
              </h2>
              <b>{item.Author}</b>
              <img src={item.urlToImage} style={{ width: '50vw' }} /> 
              <a href ={item.url}> Read More</a>
              <p>
                {item.content}
              </p>
               </div>
             
          );
          
        })
        }
      </div>
    );
  }
}

export default App;
