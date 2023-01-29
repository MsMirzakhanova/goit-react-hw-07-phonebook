import { createSlice } from "@reduxjs/toolkit";
import { contactsInitstate } from "./contactsInitState";
import { STATUS } from "../constants/status"
import {contactsAsyncThunk, addContacts, deleteContacts} from "./thunk"



const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitstate,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    },
    extraReducers: {
    [contactsAsyncThunk.pending]: (state) => {
            state.status = STATUS.loading;
        },
     [contactsAsyncThunk.fulfilled]: (state, {payload}) => {
            state.status = STATUS.success;
            state.contacts = payload;
        },
    [contactsAsyncThunk.rejected]: (state) => {
            state.status = STATUS.error;
        },
    [addContacts.pending]: (state) => {
            state.status = STATUS.loading;
        },
     [addContacts.fulfilled]: (state, {payload}) => {
            state.status = STATUS.success;
            state.contacts.push(payload);
        },
    [addContacts.rejected]: (state) => {
            state.status = STATUS.error;
        },
    [deleteContacts.pending]: (state) => {
            state.status = STATUS.loading;
        },
     [deleteContacts.fulfilled]: (state, {payload}) => {
            state.status = STATUS.success;
            state.contacts = state.contacts.filter(
                (contact) => contact.id !== payload) 
        },
    [deleteContacts.rejected]: (state) => {
            state.status = STATUS.error;
        },

    },
});

export const { setQuery } = contactsSlice.actions;

export default contactsSlice.reducer;
