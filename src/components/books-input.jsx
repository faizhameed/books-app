import React from "react";
import { connect } from "react-redux";
import { addBooksToState } from "../redux/actions";

const BooksInput = ({ addBooksToState }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addBooksToState(e.target.value);
      document.getElementById("book-input").value = "";
    }
  };
  return (
    <div>
      <h2>Add your books here</h2>
      <input id="book-input" type="text" onKeyUp={handleKeyPress} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addBooksToState: (book) => dispatch(addBooksToState(book)),
});

export default connect(null, mapDispatchToProps)(BooksInput);
