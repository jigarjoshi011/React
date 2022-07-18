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
  render() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element= {<News key="Home" pagesize = {8} country ="in" category="general"/>} />
          <Route exact path='/entertainment' element= {<News key="Entertainment" pagesize = {8} country ="in" category="entertainment"/>}/>
          <Route exact path='/sports' element= {<News key="Sports" pagesize = {8} country ="in" category="sports"/>}/>
          <Route exact path='/business' element= {<News key="business" pagesize = {8} country ="in" category="business"/>}/>
          <Route exact path='/health' element= {<News key="health" pagesize = {8} country ="in" category="health"/>}/>
          <Route exact path='/science' element= {<News key="science" pagesize = {8} country ="in" category="science"/>}/>
          <Route exact path='/technology' element= {<News key="technology" pagesize = {8} country ="in" category="technology"/>}/>
          <Route exact path='/politics' element= {<News key="politics" pagesize = {8} country ="in" category="politics"/>}/>

        </Routes>
        <Clock/>
        </BrowserRouter>
    )
  }
}



