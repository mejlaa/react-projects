import React from "react";
import Book from "./Book";

const BookList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: 20,
      }}
    >
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
