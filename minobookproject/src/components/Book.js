import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  state = {
    count: 0,
  };

  // handleClick() {
  //   console.log("you clicked me");
  //   console.log(this.state.count);
  // }

  handleClick = () => {
    console.log("you click me");
    console.log(this.state.count);
  };
  render() {
    // const { book, author } = this.props.info;
    const { img, title, author } = this.props.info;
    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>TITLE:{title}</h4>
          <h6>BY:{author}</h6>
          <button onClick={this.handleClick()}>Add count</button>
        </div>
      </div>
    );
  }
}

export default Book;
