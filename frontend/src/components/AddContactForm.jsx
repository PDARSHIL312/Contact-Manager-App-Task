import PropTypes from "prop-types";
import { useState } from "react";

const AddContactForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      email,
    };
    onAdd(newContact);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Contact
      </button>
    </form>
  );
};

AddContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddContactForm;
