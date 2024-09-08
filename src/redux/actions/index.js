import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constans";
import axios from "axios";


export const getFligths = createAsyncThunk("fligts/getFlights",
    async ()=>{
            //1. api isteği at
      const res =  await axios.request(options);
      
      //api den gelen verileri formatlayarak bu diziyi nesneye çevirdik
      const formatted = res.data.aircraft.map((item)=>({

        id:item[0],
        code:item[1],
        enlem:item[2],
        boylam:item[3],
      }
        
        

      ))
  return formatted;

        //2. aksiyonun payloadını return et
    }
);