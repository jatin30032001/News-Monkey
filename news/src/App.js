
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{BrowserRouter as Router ,
Route,
Switch} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Navbar/>
      
      <Switch>
      <Route exact  path="/"><News  key ="general" pagesize ={20} country ="in" category ="general"/></Route>
          <Route exact  path="/general"><News  key ="general" pagesize ={20} country ="in" category ="general"/></Route>
          <Route exact  path="/business"><News key="business" pagesize ={20} country ="in" category ="business"/></Route>
          <Route exact  path="/entertainment"><News key ="entertainment" pagesize ={20} country ="in" category ="entertainment"/></Route>
          <Route exact  path="/health"><News  key ="health" pagesize ={20} country ="in" category ="health"/></Route>
          <Route exact  path="/science"><News  key="science" pagesize ={20} country ="in" category ="science"/></Route>
          <Route exact  path="/sports"><News  key="sports" pagesize ={20} country ="in" category ="sports"/></Route>
          <Route exact  path="/tecnhology"><News key ="technology" pagesize ={20} country ="in" category ="technology"/></Route>
          
          
        </Switch>
      </Router>
      </div>
    )
  }
}

