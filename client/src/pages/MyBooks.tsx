import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { book } from "../types/book.interface";
import ThemeContext from "../theme/theme-context";

const MyBooks: React.FC = () => {
  const [books, setBooks] = useState<book[]>([]);
  const themes = useContext(ThemeContext);

  const getAllBooks = async () => {
    const { data } = await axios.get("http://localhost:3002/mybooks");
    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleRemoveFromMyBooks = async (bookId: number) => {
    axios.delete(`/mybooks/${bookId}`).then(() => getAllBooks());
  };
  console.log(books);
  return (
    <main style={themes}>
      {books.map((book, index) => {
        return (
          <div className="book-box" key={index}>
            <div className="img-title-box">
              <div className="img-box">
                <img src={book.url} alt="book-path" />
              </div>

              <h2>{book.title}</h2>
            </div>
            <div>
              <button
                onClick={() => handleRemoveFromMyBooks(book.bookId)}
                className="btn-add"
              >
                Remove from My Books
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MyBooks;
