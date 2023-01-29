import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://63d3c96b8d4e68c14eb289e8.mockapi.io';



export const contactsAsyncThunk = createAsyncThunk('contacts', async () => {
    const { data } = await axios.get('/contacts');
    return data;
});

export const addContacts = createAsyncThunk('contacts/addContacts', async (text) => {
    const { data } = await axios.post('/contacts', { text });
    return data;
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId) => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
});


// import { contactsLoadingAction, contactsErrorAction, contactsSuccessAction } from "./contacts.slice";
// import axios from 'axios';

// export const contactsAsyncThunk = async dispatch => {
//     dispatch(contactsLoadingAction())
//     try {
//         const { data } = await axios.get('https://63d3c96b8d4e68c14eb289e8.mockapi.io/contacts');
//         dispatch(contactsSuccessAction(data))
//     } catch {
//         dispatch(contactsErrorAction());
//     }
// };
