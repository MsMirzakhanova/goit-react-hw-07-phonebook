import { createSlice } from "@reduxjs/toolkit";
import { contactsInitstate } from "./contactsInitState";
import { STATUS } from "../constants/status"
import {contactsAsyncThunk, addContacts, deleteContacts} from "./thunk"

const handlePending = state => {
    state.status = STATUS.loading
};
    
const handleRejected = state => {
    state.status = STATUS.error
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitstate,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    },
    extraReducers: {
    [contactsAsyncThunk.pending]: handlePending,
     [contactsAsyncThunk.fulfilled]: (state, {payload}) => {
            state.status = STATUS.success;
            state.contacts = payload;
        },
    [contactsAsyncThunk.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled]: (state, {payload}) => {
            state.status = STATUS.success;
            state.contacts.push(payload);
        },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled]: (state, {payload}) => {
            state.status = STATUS.success;
            state.contacts = state.contacts.filter(
                (contact) => contact.id !== payload.id) 
        },
    [deleteContacts.rejected]: handleRejected,

    },
});

export const { setQuery } = contactsSlice.actions;

export default contactsSlice.reducer;
