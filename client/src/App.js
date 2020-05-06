import React from 'react'
import './App.css'
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./komponen/Home/Home"
import Chat from "./komponen/Chat/Chat"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route  path="/Chat/:nama/:room" component={Chat} />
    </div>
    </BrowserRouter>
      
    
  ); 
}

export default App;
