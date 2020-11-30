import React, { Component } from 'react'
import './App.css';
import SongsContainer from './components/SongsContainer';


class App extends Component {

  state = {
    songs: []
  }


  componentDidMount(){
    fetch("http://localhost:3000/songs")
      .then(response => response.json())
      .then(songs => this.setState({
        songs: songs
      }))
  }


  render(){
    return (
      <div className="App">
        <SongsContainer song={this.state.songs}/>
      </div>
    );
  }
}

export default App;
