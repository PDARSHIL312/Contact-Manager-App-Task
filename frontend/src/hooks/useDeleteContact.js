import { useState } from "react";
import { toast } from "react-hot-toast";

const useDeleteContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteContact = async (contactId, setContacts) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:7000/api/contacts/${contactId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        toast.error("Failed to delete contact try again");
        throw new Error("Failed to delete contact");
      }
      setContacts((prev) =>
        prev.filter((contact) => contact._id !== contactId)
      );
      setError(null);
      toast.success("Contact deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to Deleted Contact");
      setError(err.message || "Failed to delete contact");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteContact };
};

export default useDeleteContact;
