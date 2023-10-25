import React, { useState } from 'react';
import InputName from './InputName';
import InputNumber from './InputNumber';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactSlice';
import { checkExistence } from '../redux/ContactSlice';
import { nanoid } from 'nanoid';


export default function FormInput() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {  id: nanoid(), name, number };

    const contactExists = dispatch(checkExistence(newContact));
        if (!contactExists) {
          alert(`"${name}" is already in contacts`);
          return;
        }

      dispatch(addContact(newContact));
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
