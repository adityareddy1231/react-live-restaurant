import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  constructor() {
    super();
    //get intial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    //update state
    const fishes = {...this.state.fishes};
    //add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({fishes})
  }

  render() {
    return (<div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Sea Food Market"/>
      </div>
      <Order/>
      <Inventory addFish={this.props.addFish}/>
    </div>)
  }
}

export default App;
