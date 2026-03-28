import React, { useEffect } from "react";
import { useContact } from "../context/contactContext.jsx";

const ViewContacts = () => {
  const { contacts, fetchContacts } = useContact();
console.log("Contacts:", contacts);
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>All Contacts</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewContacts;