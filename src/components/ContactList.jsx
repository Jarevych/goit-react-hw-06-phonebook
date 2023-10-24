import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/ContactSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.contacts)
  const contactArr =  Array.isArray(contacts) && contacts.length !== 0;
  console.log(contacts)
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div>
      <ul className="contact-list">
        {contactArr && Array.isArray && contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <p className="contact-name">Name: {contact.name}</p>
            <p className="contact-number">Number: {contact.number}</p>
            <button type="button" onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;