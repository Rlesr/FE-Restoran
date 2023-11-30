// src/App.jsx
import React from 'react';
import 'bulma/css/bulma.min.css'; 
import MenuList from './components/MenuList';
import AddMenuForm from './components/AddMenuForm';


function App() {
  return (
    <div>
      <MenuList />
      <hr />
      <AddMenuForm />
      
    </div>
  );
}

export default App;
