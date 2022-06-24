import React from "react";
import ReactDOM from "react-dom";

function Book() {
  return (
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
}

const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/519ZnwcLAbL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="bookCover"
  />
);
const Title = () => <h1>The subtle Art of not Giving a F*ck</h1>;
const Author = () => (
  <p style={{ backgroundColor: "black", color: "white" }}>By Mark Manson</p>
);

export default Book;
