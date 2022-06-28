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

  filterData = (id) => {
    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: sortedBooks,
    });
  };

  handleClick = () => {
    console.log(`i'm information from parent container`);
  };
  render() {
    return (
      <div>
        <h2>Best selling books this week</h2>
        {this.state.books.map((book) => (
          <Book
            key={book.id}
            info={book}
            deleteItem={() => this.filterData(book.id)}
          />
        ))}
      </div>
    );
  }
}

export default Booklist;
