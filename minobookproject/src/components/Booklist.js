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

  render() {
    return (
      <div>
        <h2>Best selling books this week</h2>
        {this.state.books.map((book) => (
          <Book key={book.id} info={book} />
        ))}
      </div>
    );
  }
}

export default Booklist;
