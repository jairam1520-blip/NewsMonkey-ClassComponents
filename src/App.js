import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=6;
  apiKey=process.env.REACT_APP_NEWSMONKEY_API_KEY
  
  state={
    progress:0

  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  
  render() {
    
    return (
     
      <BrowserRouter>
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
      <Routes>
        
        <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general"/>}></Route>
        <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health"  pageSize={this.pageSize} category="health"/>}></Route>
        <Route  path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science"/>}></Route>
        <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports"/>}></Route>
        <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology"/>}></Route>
        <Route  path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general"/>}></Route>
        <Route  path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment"/>}></Route>
        <Route  path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business"/>}></Route>
        
      </Routes>
    </BrowserRouter>
    );
  }
}
