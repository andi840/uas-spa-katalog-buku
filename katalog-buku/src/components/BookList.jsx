import BookCard from "./BookCard";

const BookList = ({ books, onEdit, onDelete }) => (
  <div className="row g-3">
    {books.map((b) => (
      <div className="col-12 col-sm-6 col-md-4" key={b.id}>
        <BookCard book={b} onEdit={onEdit} onDelete={onDelete} />
      </div>
    ))}
  </div>
);

export default BookList;
