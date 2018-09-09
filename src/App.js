import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Heading from "./Heading";
import Home from "./Home";
import GamePlay from "./GamePlay";
import Footer from "./Footer";
import Lore from "./Lore";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Heading />
                <div className="container">
                    <div id="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/GamePlay" component={GamePlay}/>
                        <Route path="/Lore" component={Lore}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
