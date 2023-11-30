//src/components/MenuList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/menus`);
        setMenus(response.data.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/menu/${id}`);
      alert('Menu deleted successfully!');
// Refresh menu list after deletion
      const response = await axios.get(`${API_BASE_URL}/menus`);
      setMenus(response.data.data);
    } catch (error) {
      console.error('Error deleting menu:', error);
    }
  };

  const handleEdit = (menu) => {
    setSelectedMenu(menu);
  };

  const handleEditSuccess = async () => {
    const response = await axios.get(`${API_BASE_URL}/menus`);
    setMenus(response.data.data);
    setSelectedMenu(null);
  };

  return (
    <div className="container mt-6">
      <h1 className="title has-text-centered mb-5">Menu List</h1>
      <div className="columns is-multiline">
      {menus.map(menu => (
  <div key={menu.id} className="column is-one-third">
    <div className="card box">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={menu.gambar} alt={menu.namaMakanan} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4 has-text-centered">{menu.namaMakanan}</p>
        <p className="subtitle is-6 has-text-centered">Rp {menu.harga.toLocaleString()}</p>
        <p className="content">{menu.deskripsi}</p>
        <div className="buttons is-centered">
          <button
            className="button is-danger is-outlined mr-2"
            onClick={() => handleDelete(menu.id)}
          >
            Delete
          </button>
          {/* Add additional content here */}
          <button
            className="button is-primary is-outlined"
            onClick={() => handleEdit(menu)}
          >
            Edit
          </button>
          {/* Add more buttons or content as needed */}
        </div>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default MenuList;