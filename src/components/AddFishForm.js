import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func.isRequired
  };

  createFish = event => {
    console.log(this.nameRef.value);
    event.preventDefault();
    const fish = {
      name: this.nameRef.value || "Temporary Name",
      price: parseFloat(this.priceRef.value) || 10.00,
      status: this.statusRef.value || "unavailable",
      desc: this.descRef.value || "Write something good here",
      image: this.imageRef.value || "https://via.placeholder.com/350x150"
    };
    this.props.addFish(fish);

    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={(ref) => this.nameRef = ref} type="text" placeholder="Name" />
        <input
          name="price"
          ref={(ref) => this.priceRef = ref}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={(ref) => this.statusRef = ref}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={(ref) => this.descRef = ref}
          type="text"
          placeholder="Desc"
        />
        <input
          name="image"
          ref={(ref) => this.imageRef = ref}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ AddFish</button>
      </form>
    );
  }
}

export default AddFishForm;
