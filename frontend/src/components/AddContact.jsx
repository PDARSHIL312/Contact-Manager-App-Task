import PropTypes from "prop-types";

const AddContact = ({ onAdd }) => {
  const handleAddClick = () => {
    onAdd();
  };

  return (
    <button
      onClick={handleAddClick}
      className="w-full bg-blue-500 text-white p-2 rounded-md"
      aria-label="Add New Contact"
    >
      Add New Contact
    </button>
  );
};

AddContact.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddContact;
