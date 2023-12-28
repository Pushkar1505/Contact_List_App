// ContactItem.js
import React from 'react';
import '../ContactItem/ContactItem.css'; // Import the CSS

const ContactItem = ({ user, updateContact, deleteContact }) => {
  return (
    <li className="contact-item">
      <span>{user.name}</span>
      <div className="button-container">
        <button onClick={() => updateContact(user.id, prompt('Enter new name:'))}>Update</button>
        <button onClick={() => deleteContact(user.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ContactItem;
