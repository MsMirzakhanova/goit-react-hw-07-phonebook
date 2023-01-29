import React from 'react';
import { contactsAsyncThunk } from "../redux/thunk"
import { useEffect } from 'react';

import { ContactItem, ContactBtn } from './ContactsList.styled';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import {deleteContacts} from "../redux/thunk"
import {getVisibleContacts} from "../redux/selectors"


export const ContactsList = () => {
  const filteredContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(contactsAsyncThunk());
  }, [dispatch]);

 
  const onDeleteContact = (id) => {
    dispatch(deleteContacts(id));
  };
 
  return (
  <ul>
    {filteredContacts.map(({ id, name, phone }) => (
      <ContactItem key={id}>
        <p>{name}: {phone}{' '}</p>
        <ContactBtn onClick={() => onDeleteContact(id)}>delete</ContactBtn>
      </ContactItem>
    )
    )}
    </ul>
  )
}




    
