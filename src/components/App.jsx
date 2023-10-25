import '../styles.css';
import ContactList from './ContactList';
import FormInput from './Form';
import { useSelector } from 'react-redux';
import Filter from './Filter';

export function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <div className="app-container">
      <h2 className="app-title">Phonebook</h2>
      <FormInput />
      <h2 className="contacts-title">Contacts</h2>
      <Filter />
      <div>
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}
