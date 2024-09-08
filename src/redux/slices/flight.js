import { createSlice } from "@reduxjs/toolkit"
import { getFligths } from "../actions";


const initialState = {
    isLoading: true,
    error: null,
    flights: [],
    path:[]
}


const flightSlice = createSlice({
    name: "flights",
    initialState,
    reducers:{
        setPath:(state,{payload})=>{
            state.path=payload
        },

    },
    extraReducers: (builder) => {

        builder.addCase(getFligths.pending, (state) => { 
            state.isLoading=true;

        });
        builder.addCase(getFligths.rejected, (state,{error}) => { 
           state.error= error.message
           state.isLoading=false
          
           
        });
        builder.addCase(getFligths.fulfilled, (state,{payload}) => { 
            state.isLoading =false;
            state.error=null;
            state.flights=payload;
        });


    },





});
export const {setPath} = flightSlice.actions;
export default flightSlice.reducer;
