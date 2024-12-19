import PropTypes from "prop-types";
import AddContactForm from "./AddContactForm";
import useUpdateContact from "../hooks/useUpdateContact";

import { useState } from "react";

const RightPanel = ({
  view,
  selectedContact,
  onContactDeleted,
  onContactUpdated,
  onAddContact,
  setFilteredContacts,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const { updateContact } = useUpdateContact();
  let [updatedContact, setUpdatedContact] = useState(selectedContact || {});

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleApplyClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleInputChange = (event) => {
    setUpdatedContact({
      ...updatedContact,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      updateContact(selectedContact._id, updatedContact, setFilteredContacts);
      setIsEdit(false);
      onContactUpdated();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="bg-gray-700 p-4 rounded-l-lg flex flex-col items-center justify-center h-full">
      {view === "default" && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Welcome</h2>
          <p className="text-gray-300">Please add or select a contact.</p>
        </div>
      )}

      {view === "add" && (
        <div>
          <AddContactForm onAdd={onAddContact} />
        </div>
      )}

      {view === "detail" && (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={selectedContact.photoUrl}
              alt={selectedContact.name}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">
                {selectedContact.name}
              </h2>
              <p className="text-gray-300">Email: {selectedContact.email}</p>
              <p className="text-gray-300">Phone: {selectedContact.phone}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onContactDeleted(selectedContact._id)}
            >
              Delete
            </button>
            {!isEdit ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={handleEditClick}
              >
                Edit
              </button>
            ) : (
              <div>
                <form onSubmit={handleUpdate}>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      name="name"
                      value={updatedContact.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      value={updatedContact.phone}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      name="email"
                      value={updatedContact.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleApplyClick}
                  >
                    Apply
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

RightPanel.propTypes = {
  view: PropTypes.oneOf(["default", "add", "detail", "edit"]).isRequired,
  selectedContact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
  }),
  onContactDeleted: PropTypes.func.isRequired,
  onContactUpdated: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
  setFilteredContacts: PropTypes.func.isRequired,
};

export default RightPanel;
