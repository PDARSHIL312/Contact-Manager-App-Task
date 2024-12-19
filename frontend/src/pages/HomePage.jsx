import { useState, useEffect } from "react";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import useContacts from "../hooks/useContacts";
import useDeleteContact from "../hooks/useDeleteContact";

const HomePage = () => {
  const { contacts, addContact, fetchContacts } = useContacts();
  const { deleteContact } = useDeleteContact();
  const [selectedContact, setSelectedContact] = useState(null);
  const [rightPanelView, setRightPanelView] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phone.includes(searchQuery)
      );
      setFilteredContacts(filtered);
    }
  }, [searchQuery, contacts]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setRightPanelView("detail");
  };

  const handleAddContactClick = () => {
    setRightPanelView("add");
  };

  const handleContactDeleted = async (contactId) => {
    await deleteContact(contactId, setFilteredContacts);
    fetchContacts();
    setRightPanelView("default");
    setSelectedContact(null);
  };
  // const con = [];
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2 bg-gray-800 p-4 rounded-r-lg">
        <LeftPanel
          contacts={filteredContacts}
          onSearch={(query) => setSearchQuery(query)}
          onContactClick={handleContactClick}
          onAddContactClick={handleAddContactClick}
        />
      </div>

      <div className="w-1/2 bg-gray-700 p-4 rounded-l-lg">
        <RightPanel
          view={rightPanelView}
          selectedContact={selectedContact}
          onContactDeleted={handleContactDeleted}
          onContactUpdated={() => fetchContacts()}
          onAddContact={addContact}
          setFilteredContacts={setFilteredContacts}
        />
      </div>
    </div>
  );
};

export default HomePage;
