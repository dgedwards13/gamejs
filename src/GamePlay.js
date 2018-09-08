import React, { Component } from 'react';
import Winning from "./Winning";
import Combat from "./Combat";
import Turns from "./Turns";
import Users from "./Users";
import NonUsers from "./NonUsers";
import SetUp from "./SetUp";
import Strategies from "./Strategies";
import Future from "./Future";

class GamePlay extends Component {
  render() {
    return (
        <div>
            <SetUp />
            <Turns />
            <Combat />
            <Winning />
            <Users />
            <NonUsers />
            <Strategies />
            <Future />
        </div>
    );
  }
}

export default GamePlay;
