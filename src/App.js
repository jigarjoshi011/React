import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Clock from './Components/Clock';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pageSize = 12
  render() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/general' element= {<News key="Home" pagesize = {this.pageSize} country ="in" category="general"/>} />
          <Route exact path='/entertainment' element= {<News key="Entertainment" pagesize = {this.pageSize} country ="in" category="entertainment"/>}/>
          <Route exact path='/sports' element= {<News key="Sports" pagesize = {this.pageSize} country ="in" category="sports"/>}/>
          <Route exact path='/business' element= {<News key="business" pagesize = {this.pageSize} country ="in" category="business"/>}/>
          <Route exact path='/health' element= {<News key="health" pagesize = {this.pageSize} country ="in" category="health"/>}/>
          <Route exact path='/science' element= {<News key="science" pagesize = {this.pageSize} country ="in" category="science"/>}/>
          <Route exact path='/technology' element= {<News key="technology" pagesize = {this.pageSize} country ="in" category="technology"/>}/>
          <Route exact path='/politics' element= {<News key="politics" pagesize = {this.pageSize} country ="in" category="politics"/>}/>

        </Routes>
        <Clock/>
        </BrowserRouter>
    )
  }
}



