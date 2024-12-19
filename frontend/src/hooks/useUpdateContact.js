import { toast } from "react-hot-toast";

const useUpdateContact = () => {
  const updateContact = async (
    selectedId,
    updatedContact,
    setFilteredContacts
  ) => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/contacts/${selectedId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedContact),
        }
      );

      if (!response.ok) {
        toast.error(
          "name should be 2 to 50 characters long \n phone number formate should be +91-1234567890 \n email should be valid"
        );
        throw new Error("Failed to update contact");
      }

      setFilteredContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === updatedContact._id ? updatedContact : contact
        )
      );
      toast.success("Contact updated successfully");
      
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Error updating contact");
    }
  };

  return { updateContact };
};

export default useUpdateContact;
