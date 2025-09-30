
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { Weather,  WeatherSliceState } from "./types"
import {WEATHER_URL,APP_ID} from "./data"
import axios from "axios"
import { v4 } from "uuid"



const weatherInitialState: WeatherSliceState = {
  searchWeather : undefined,
  weathers: [],
  error : undefined,
  isFetching: false,
}


export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,

  reducers: create => ({
    getWeather: create.asyncThunk(

      async (inputCity : string,{rejectWithValue}) => {
      const city = inputCity.trim();
     if (!city) {
      alert("Empty field, enter your country")
      return;
      };

        const URL = `${WEATHER_URL}?q=${city}&units=metric&appid=${APP_ID}`;
     
       try {
        const response = await axios.get(URL)
        return response
       }catch( error:any){
       return rejectWithValue({ cod: error.response.data.cod, message: error.response.data.message, })
       }
      },
{pending : (state : WeatherSliceState) =>{
    state.error = undefined;
    state.isFetching = true;
},
fulfilled : (state : WeatherSliceState, action)=>{
    state.isFetching = false;
    if (action.payload){
    const data = action.payload.data
            state.searchWeather = {
              id: v4(),
              name: data.name,
              country: data.sys.country,
              temp: data.main.temp,
              icon: data.weather[0].icon,
    }
  }
},

rejected: (state: WeatherSliceState, action:any) => {
  // console.log(action)
  state.isFetching = false
  // state.weatherSearch = undefined
  if (action.payload ) {
    state.error = action.payload
  } else {
    state.error = {cod: "General Error", message: "Some Network Error"}
  }
},
      },
    ),


    saveWeather: create.reducer(
      (state: WeatherSliceState, action: PayloadAction<Weather>) => {
        state.weathers.push(action.payload)
         state.searchWeather = undefined
         alert("Data saved successfully")
         
      },
    ),

    deleteWeather: create.reducer(
      (state: WeatherSliceState, action: PayloadAction<string>) => {
        state.weathers = state.weathers.filter(
          weather => weather.id !== action.payload,
          alert("Data deleted successfully")
        )
      },
    )
  ,
  deleteSearchWeather: create.reducer((state: WeatherSliceState) => {
    
       state.searchWeather = undefined
      alert("Data deleted successfully")
  },
    )
,
    deleteAllWeathers: create.reducer(() => {
      alert("Data deleted successfully")
      return weatherInitialState
      
    }),
    deleteError: create.reducer((state: WeatherSliceState) => {
       state.error = undefined 
       alert("Data deleted successfully")
  },
)

  }
),

  selectors: {
    weathers: (state : WeatherSliceState) => state.weathers,
    searchWeather : (state : WeatherSliceState) => state.searchWeather,
    error: (state : WeatherSliceState) => state.error,
    isFetching: (state : WeatherSliceState) => state.isFetching,
  
  },

}
);

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors



