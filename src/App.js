// App.js
import React, { useState, useEffect } from 'react';
import { fetchUsers, addNewContact, updateContact, deleteContact } from './services/api';
import ContactList from './components/ContactList/ContactList';
import AddContactForm from './components/AddContact/AddContactForm';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styling

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleAddContact = (newContact) => {
    addNewContact({ name: newContact })
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        console.error('Error adding contact:', error);
      });
  };

  const handleUpdateContact = (userId, newName) => {
    updateContact(userId, { name: newName })
      .then(response => {
        const updatedUsers = users.map(user =>
          user.id === userId ? { ...user, name: response.data.name } : user
        );
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error updating contact:', error);
      });
  };

  const handleDeleteContact = (userId) => {
    deleteContact(userId)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Contact List App</h1>
      <AddContactForm addContact={handleAddContact} />
      <ContactList
        users={users}
        updateContact={handleUpdateContact}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
