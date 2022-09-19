import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contact',
    initialState:{value:{creditLimit: 100000}},
    reducer: {
        updateSettings: (state,action) => {
            state.value = action.payload;
        }
    }
});

export const {updateSettings} = contactSlice.actions
export default contactSlice.reducer;