import axios from 'axios'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const getEquipList = createAsyncThunk(
    "GET_EQUIP_LIST",
    async ( ) => {
        try{
            const res = await axios.get("https://my-json-server.typicode.com/gilyeon00/Sunggongee-v2/equipList");
            // console.log(res.data)
            return res.data
        }catch(err){
            console.log(err)
        }
    }
)

const equipSlice = createSlice({
    name: 'equip',
    initialState:{
        data:[],
        loading:'true'        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getEquipList.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(getEquipList.fulfilled,(state,action)=>{
            state.value=action.payload;
            state.loading=false;
        })
        builder.addCase(getEquipList.rejected,(state,action)=>{
            state.loading=true;
        })
    }

})

export default equipSlice.reducer
