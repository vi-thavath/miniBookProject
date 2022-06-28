import React, { Component } from "react";
// import Button from "./Button";
class Book extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 0,
      name: "john",
    };
  }

  addCount = () => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
      // name: "bane",
    });
  };

  lowerCount = () => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count - 1,
      // name: "bane",
    });
  };

  resetCount = () => {
    console.log(this.state.count);
    this.setState({
      count: 0,
      // name: "bane",
    });
  };
  render() {
    const { img, title, author } = this.props.info;
    // const { handleClick } = this.props;
    const { deleteItem } = this.props;
    // console.log(handleClick);
    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>TITLE:{title}</h4>
          <h6>BY:{author}</h6>
          <button onClick={deleteItem}>delete item</button>
        </div>
      </div>
    );
  }
}

export default Book;
