import PropTypes from "prop-types";
import Search from "./Search";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const LeftPanel = ({
  contacts,
  onSearch,
  onContactClick,
  onAddContactClick,
}) => {
  // console.log("from leftPanel", contacts);
  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col space-y-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Diary</h2>
      <Search onSearch={onSearch} />
      <div className="flex justify-start">
        <AddContact onAdd={onAddContactClick} />

      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
        <ContactList contacts={contacts} onContactClick={onContactClick} />
      </div>
    </div>
  );
};

LeftPanel.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSearch: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired,
  onAddContactClick: PropTypes.func.isRequired,
};

export default LeftPanel;
