// src/components/EditMenuForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const EditMenuForm = ({ menuId, onClose, onEditSuccess }) => {
  const [formData, setFormData] = useState({
    namaMakanan: '',
    harga: null,
    deskripsi: '',
    gambar: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_BASE_URL}/menu/${menuId}`, formData);
      alert('Menu updated successfully!');
      onEditSuccess();
      onClose();
    } catch (error) {
      console.error('Error updating menu:', error);
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h1 className="title">Edit Menu</h1>
          <form onSubmit={handleSubmit}>
            {/* Add input fields for editing menu */}
            <div className="field">
              <label className="label">Nama Makanan</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="namaMakanan"
                  value={formData.namaMakanan}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Repeat similar input fields for harga, deskripsi, and gambar */}
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="button is-danger ml-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default EditMenuForm;

