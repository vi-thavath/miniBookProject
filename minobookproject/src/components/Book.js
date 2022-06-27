import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, author } = this.props.info;
    return (
      <div>
        <h3>book : {book}</h3>
        <h5>author : {author}</h5>
      </div>
    );
  }
}

export default Book;
