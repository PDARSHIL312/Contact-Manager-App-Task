import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:7000/api/contacts/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        toast.error("not able to fetch contacts");
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      setContacts(data.contacts);
      setError(null);
    } catch (err) {
      console.error(err);
      toast.error("not able to fetch contacts");
      setError(err.message || "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const addContact = async (newContact) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:7000/api/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) {
        // console.log(response);
        toast.error(
          "name should be 2 to 50 characters long \n phone number formate should be +91-1234567890 \n email should be valid"
        );
        throw new Error("Failed to add contact");
      }
      const addedContact = await response.json();

      setContacts((prevContacts) => [...prevContacts, addedContact.newContact]);
      setError(null);
      toast.success("created Successfully");
    } catch (err) {
      toast.error("Failed to add contact");
      setError(err.message || "Failed to add contact");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return { contacts, loading, error, addContact, fetchContacts };
};

export default useContacts;
