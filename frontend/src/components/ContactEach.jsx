import PropTypes from "prop-types";

const ContactEach = ({ contact, onClick }) => {
  return (
    <div
      className="flex items-center p-4 bg-gray-800 rounded-md shadow-sm cursor-pointer hover:bg-gray-700 transition-all duration-200"
      onClick={onClick}
    >
      <img
        src={contact.photoUrl || ""} // Fallback image
        alt={contact.name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h3 className="text-lg font-bold text-white">{contact.name}</h3>
        <p className="text-sm text-gray-400">{contact.phone}</p>
      </div>
    </div>
  );
};

ContactEach.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photoUrl: PropTypes.string, // Optional photo URL
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactEach;
