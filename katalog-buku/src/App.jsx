import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Footer from "./components/Footer";
import { getBooks, addBook, updateBook, deleteBook } from "./services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleAdd = async (data) => {
    await addBook(data);
    fetchBooks();
  };

  const handleUpdate = async (id, data) => {
    await updateBook(id, data);
    fetchBooks();
    setEditBook(null);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <BookForm onSubmit={editBook ? handleUpdate : handleAdd} editBook={editBook} />
        <BookList books={books} onEdit={setEditBook} onDelete={handleDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
