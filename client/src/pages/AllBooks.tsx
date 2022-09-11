import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { book } from "../types/book.interface";
import ThemeContext from "../theme/theme-context";

const AllBooks: React.FC = () => {
  const [books, setBooks] = useState<book[]>([]);
  const themes = useContext(ThemeContext);

  const getAllBooks = async () => {
    const { data } = await axios.get("http://localhost:3002/allbooks");
    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const AddToMyBooks = async (bookId: number, title: string, url: string) => {
    axios.post("/mybooks", {
      bookId,
      title,
      url,
    });
  };

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
                onClick={() => AddToMyBooks(book.bookId, book.title, book.url)}
                className="btn-add"
              >
                Add to My Books
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default AllBooks;
