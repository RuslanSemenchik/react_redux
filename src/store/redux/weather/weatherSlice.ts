
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { Weather,  WeatherSliceState } from "./types"
import {WEATHER_URL,APP_ID} from "./data"
import axios from "axios"


const weatherInitialState: WeatherSliceState = {
  weathers: [],
  error : undefined,
  isFetching: false,
  
}


export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,

  reducers: create => ({
    getWeather: create.asyncThunk(

      async (inputCity : string) => {
      const city = inputCity.trim();
     if (!city) {
      alert("Empty field, enter your country")
      };

        const URL = `${WEATHER_URL}?q=${city}&units=metric&appid=${APP_ID}`;
    // 
      
        // В response у нас будет лежать либо ошибка, либо ожидаемые данные с сервера, что именно мы не знаем сразу
        const response = await axios.get(URL)
        return response
      },
{pending : (state : WeatherSliceState) =>{
    state.error = undefined;
    state.isFetching = true;
},
fulfilled : (state : WeatherSliceState, action)=>{
    state.isFetching = false;
    if (action.payload){
    state.weathers = [...state.weathers, { id: action.payload.data.id, name: action.payload.data.name, 
      country : action.payload.data.sys.country, temp : action.payload.data.main.temp, icon : action.payload.data.weather[0]}];

    }
},
rejected: (state: WeatherSliceState, action: any) => {
         state.isFetching = false
          if (action.payload) {
        
            state.error = action.payload.message
          } else {
            state.error = "Some Networl Error"
          }
        },
      },
    ),



    saveWeather: create.reducer(
      (state: WeatherSliceState, action: PayloadAction<Weather>) => {
        state.weathers.push(action.payload)
      },
    ),

    deleteWeather: create.reducer(
      (state: WeatherSliceState, action: PayloadAction<number>) => {
        state.weathers = state.weathers.filter(
          weather => weather.id !== action.payload,
        )
      },
    )
  ,

    deleteAllWeathers: create.reducer(() => {
      return weatherInitialState
    }),

  }
),

  selectors: {
    weathers: (state : WeatherSliceState) => {
     return state.weathers}

  },

}
);

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors



