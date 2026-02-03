import { useEffect, useState } from "react";

const BookForm = ({ onSubmit, editBook }) => {
  const [form, setForm] = useState({
    judul: "",
    penulis: "",
    tahun: "",
    kategori: "",
  });

  useEffect(() => {
    if (editBook) {
      setForm({
        judul: editBook.judul,
        penulis: editBook.penulis,
        tahun: editBook.tahun,
        kategori: editBook.kategori,
      });
    }
  }, [editBook]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      judul: "",
      penulis: "",
      tahun: "",
      kategori: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editBook) {
      onSubmit(editBook.id, form);
    } else {
      onSubmit(form);
    }

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="form-control mb-2"
        name="judul"
        value={form.judul}
        onChange={handleChange}
        placeholder="Judul Buku"
        required
      />
      <input
        className="form-control mb-2"
        name="penulis"
        value={form.penulis}
        onChange={handleChange}
        placeholder="Penulis"
        required
      />
      <input
        className="form-control mb-2"
        name="tahun"
        value={form.tahun}
        onChange={handleChange}
        placeholder="Tahun"
        required
      />
      <input
        className="form-control mb-2"
        name="kategori"
        value={form.kategori}
        onChange={handleChange}
        placeholder="Kategori"
        required
      />
      <button className="btn btn-primary">
        {editBook ? "Update" : "Tambah"}
      </button>
    </form>
  );
};

export default BookForm;
