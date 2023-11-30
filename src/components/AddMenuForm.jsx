// src/components/AddMenuForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const AddMenuForm = () => {
  const [menuData, setMenuData] = useState({
    namaMakanan: '',
    harga: 0,
    deskripsi: '',
    gambar: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuData({ ...menuData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/menu`, menuData);
      alert('Menu added successfully!');
      setMenuData({
        namaMakanan: '',
        harga: 0,
        deskripsi: '',
        gambar: '',
      });
    } catch (error) {
      console.error('Error adding menu:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered mb-5">Add Menu</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="namaMakanan"
              value={menuData.namaMakanan}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="harga"
              value={menuData.harga}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              name="deskripsi"
              value={menuData.deskripsi}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image URL</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="gambar"
              value={menuData.gambar}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Add Menu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMenuForm;
