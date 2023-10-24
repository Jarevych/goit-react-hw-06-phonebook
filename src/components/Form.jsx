import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import InputName from './InputName';
import InputNumber from './InputNumber';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/ContactSlice';

export default function FormInput() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const contactExist = contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      );
   
      if (contactExist) {
        alert(`"${name}" is already in contacts`);
        return;
      }
      dispatch(addContacts({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputName name={name} onChange={setName} />
      <InputNumber number={number} onChange={setNumber} />
      <div>
        <button type="submit">Додати</button>
      </div>
    </form>
  );
}
