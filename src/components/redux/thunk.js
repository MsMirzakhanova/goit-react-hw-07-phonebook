import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://63d3c96b8d4e68c14eb289e8.mockapi.io';



export const contactsAsyncThunk = createAsyncThunk('contacts', async () => {
    const { data } = await axios.get('/contacts');
    return data;
});

export const addContacts = createAsyncThunk('contacts/addContacts', async ({ name, phone}) => {
    const { data } = await axios.post('/contacts', { name, phone});
    return data;
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
});


