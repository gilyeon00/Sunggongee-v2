import axios from 'axios'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const equipSlice = createSlice({
    name: 'equip',
    initialState:{
        value:[]
    },
    reducers:{
    },
    extraReducers: (builder) => {
        
    }

})
export default equipSlice.reducer
