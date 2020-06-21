import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        url: 'http://localhost:3000/upload'
      }
   
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
    console.log(event.target.files[0]);
  }

  onClickHandler = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile);

    axios.post(this.state.url, data, {

    }).then(res => {
      console.log(res.data);
    })
  }

  render(){

    return (
      <div>
        <input id="myInput" type="file" accept=".jpg, .png, .jpeg|image/*" onChange={this.onChangeHandler}/>
        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
      </div>
    );
  }
}

export default App;