import React from "react";
import "./App.css";
import Books from "./components/books";
import BooksInput from "./components/books-input";

function App() {
  return (
    <div className="App">
      <Books />
      <BooksInput />
    </div>
  );
}

export default App;
