import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    //grabbing text from box
    const storeId = this.storeInput.value;
    console.log(storeId);
    this.props.history.push(`/store/${storeId}`);
  }

  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="Submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object
}

export default StorePicker;
