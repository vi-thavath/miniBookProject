import React, { Component } from "react";
import Book from "./Book";
import booksData from "./data";

class Booklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: booksData,
    };
  }

  // state = {
  //   books: booksData,
  // };
  //this.setState({})
  render() {
    const example = this.state.books.map((item) => <p>{item.book} </p>);
    // console.log(example);
    return (
      <div>
        <h2>Hello from booklist</h2>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} />
        ))}
      </div>
    );
  }
}

export default Booklist;
