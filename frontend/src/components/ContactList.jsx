import PropTypes from "prop-types";
import ContactEach from "./ContactEach";

const ContactList = ({ contacts, onContactClick }) => {
  // console.log("ContactList", contacts);
  return (
    <div className="mt-4 space-y-4">
      {contacts.length > 0 ? (
        contacts.map((contactEach) => {
          return (
            <ContactEach
              key={contactEach._id}
              contact={contactEach}
              onClick={() => onContactClick(contactEach)}
            />
          );
        })
      ) : (
        <p className="text-gray-500 text-center">No contacts available.</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactClick: PropTypes.func.isRequired,
};

export default ContactList;
