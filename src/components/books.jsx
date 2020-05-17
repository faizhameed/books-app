import React from "react";
import { connect } from "react-redux";

const Books = ({ books }) => {
  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.length > 0 ? (
          books.map((book, index) => <li key={index}>{book}</li>)
        ) : (
          <li>No books have been added</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
});

export default connect(mapStateToProps)(Books);

/* const mapDispatchToProps = (dispatch) => ({
  addBooksToState: (book) => dispatch(addBooksToState(book)),
});
 */
