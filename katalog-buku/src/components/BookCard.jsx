const BookCard = ({ book, onEdit, onDelete }) => (
  <div className="card h-100">
    <div className="card-body">
      <h5>{book.judul}</h5>
      <p>{book.penulis}</p>
      <small>{book.tahun} | {book.kategori}</small>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <button className="btn btn-warning btn-sm" onClick={() => onEdit(book)}>Edit</button>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(book.id)}>Hapus</button>
    </div>
  </div>
);

export default BookCard;
