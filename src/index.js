import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from "react-router";
import "./css/style.css"
import App from "./components/App";
import StorePicker from "./components/StorePicker";
import NotFound from "./components/NotFound";
require('dotenv').load();

const Root = () => {
  return (<BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>)
}
render(<Root/>, document.querySelector("#main"));
