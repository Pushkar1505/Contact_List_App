import React, { useState } from 'react';
import '../AddContact/AddContactForm.css'; // Import the CSS

const AddContactForm = ({ addContact }) => {
  const [newContact, setNewContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact('');
  };

  return (
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={newContact}
        onChange={(e) => setNewContact(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactForm;
