// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// const ContactContext = createContext();

// export const ContactProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const sendMessage = async (formData) => {
//     try {
//       setLoading(true);
//       setError("");
//       setSuccess("");

//       const res = await axios.post(
//         "http://localhost:8000/api/contact/addContact",
//         formData
//       );

//       setSuccess(res.data.message);
//       return true;
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <ContactContext.Provider
//       value={{ sendMessage, loading, success, error }}
//     >
//       {children}
//     </ContactContext.Provider>
//   );
// };

// export const useContact = () => useContext(ContactContext);


import { createContext, useContext, useState } from "react";
import axios from "axios";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [contacts, setContacts] = useState([]);

  // SEND MESSAGE (Public Contact Form)
  const sendMessage = async (formData) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await axios.post(
        "http://localhost:8000/api/contact/addContact",
        formData
      );

      setSuccess(res.data.message);
      return true;

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      return false;

    } finally {
      setLoading(false);
    }
  };

  // ADMIN: GET ALL CONTACTS
  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Admin Token:", token);
      const res = await axios.get(
        "http://localhost:8000/api/contact/getContact",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContacts(res.data.data);
      console.log("Fetched contacts:", res.data.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        sendMessage,
        fetchContacts,
        contacts,
        loading,
        success,
        error
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);