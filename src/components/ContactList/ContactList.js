import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import '../ContactList/ContactList.css'; // Import the CSS

const ContactList = ({ users, updateContact, deleteContact }) => {
  return (
    <ul className="contact-list">
      {users.map(user => (
        <ContactItem
          key={user.id}
          user={user}
          updateContact={updateContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
