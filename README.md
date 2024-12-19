# Contact Dictionary

## Overview
The **Contact Dictionary** is a web application designed to manage and organize your contacts efficiently. It provides a user-friendly interface with a left panel for displaying and searching contacts, and a right panel for viewing detailed contact information or performing actions like adding, editing, or deleting contacts.

## Video Description
https://github.com/PDARSHIL312/Contact-Manager-App-Task/blob/main/Contact-Manager-App%20-%20Made%20with%20Clipchamp.mp4)


## Features
1. **Add Contact**:
   - Easily add a new contact with fields for name, email, phone, and a photo URL.

2. **Search Contact**:
   - Search contacts by name or phone number using a responsive search bar.

3. **Contact List**:
   - Display all contacts in a visually appealing list format with profile pictures.

4. **Contact Details**:
   - View detailed information about a selected contact in the right panel.

5. **Edit Contact**:
   - Update an existing contact's details.

6. **Delete Contact**:
   - Remove a contact from the list with a single click.

7. **Responsive Design**:
   - Designed for seamless usability across different screen sizes.

8. **Toast Notifications**:
   - Provides feedback for actions like adding, editing, or deleting contacts using toast notifications.

## Custom Hooks
### 1. `useContacts`
- **Purpose**: Handles fetching, adding, and managing contacts from the backend.
- **Approach**:
  - Uses  'fetch' for API calls.
  - Stores contacts in state as an array, with each contact containing `_id`, `name`, `phone`, `email`, and `photoUrl`.
  - Implements error handling and loading states for a smooth user experience.

### 2. `useDeleteContact`
- **Purpose**: Handles the deletion of contacts.
- **Approach**:
  - Provides a method to delete a contact by its `_id`.
  - Updates the contact list after successful deletion.

## Approach and Architecture
- **Component-Based Design**: The app is built using React components for modularity and reusability.
- **Custom Hooks**: Encapsulates API logic into reusable hooks to keep components clean and focused.
- **Toast Notifications**: 
  - Implements toast notifications using libraries like `react-toastify`.
  - Provides immediate feedback for user actions, such as success or error messages.

## File Structure
```
frontend/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddContact.jsx
│   │   ├── AddContactForm.jsx
│   │   ├── ContactDetail.jsx
│   │   ├── ContactEach.jsx
│   │   ├── ContactList.jsx
│   │   ├── DeleteContact.jsx
│   │   ├── LeftPanel.jsx
│   │   ├── RightPanel.jsx
│   │   ├── Search.jsx
│   │   ├── UpdateContact.jsx
│   ├── hooks/
│   │   ├── useContacts.js
│   │   ├── useDeleteContact.js
│   │   ├── useUpdateContact.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx

```

## How to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd contact-dictionary
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Backend server (if required):
   - Ensure the backend server is running at `http://localhost:7000`.

## Backend API
- **GET /api/contacts/**: Fetch all contacts.
- **POST /api/contacts/**: Add a new contact.
- **DELETE /api/contacts/:id**: Delete a contact by ID.
- **PUT /api/contacts/:id**: Update a contact by ID.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **State Management**: React hooks
- **HTTP Client**: Axios
- **Notifications**: React Toastify

## Future Improvements
- Implement authentication for secure access.
- Add support for contact groups.
- Enhance UI/UX with animations.
- Implement pagination for large contact lists.

---
Thank you for using **Contact Dictionary**! Feel free to contribute or report issues.
