import { createAppSlice } from "store/createAppSlice";
import { Joke, JokeSliceState } from "./types";
import axios from "axios";
import { PayloadAction} from "@reduxjs/toolkit";

const RANDOM_JOKE_URL : string = "https://official-joke-api.appspot.com/random_joke";

const randomJokeInitialState: JokeSliceState = {
jokes : [],
error : undefined,
isFetching: false,

}

export const randomJokeSlice = createAppSlice({
name : "JOKES",
initialState : randomJokeInitialState,

reducers : create=>({
   getJoke : create.asyncThunk (
async (dataFromComponent: any, { rejectWithValue }) => {
        console.log(dataFromComponent)
        // Пример как делать POST запрос
        // const response = await axios.post(
        //   RANDOM_JOKE_URL,
        //   dataFromComponent,
        // )
        
       try{ const response = await axios.get(RANDOM_JOKE_URL)
        return response
       }catch (error) {
          console.log(error)
          return rejectWithValue(error)
        }
        // Без обрабоки try ctacht
        // const response = await axios.post(
        //   RANDOM_JOKE_URL,
        //   dataFromComponent,
        // )
      },
{pending : (state : JokeSliceState) =>{
    state.error = undefined;
    state.isFetching = true;
},
fulfilled : (state : JokeSliceState, action)=>{
    state.isFetching = false;
    if (action.payload){
    state.jokes = [...state.jokes, {setup : action.payload.data.setup, punchline: action.payload.data.punchline, id :action.payload.data.id }];
   
    }
},
rejected: (state: JokeSliceState, action: any) => {
         state.isFetching = false
          if (action.payload) {
            
            state.error = action.payload.message
          } else {
            state.error = "Some Networl Error"
          }
        },
      },
    ),

deleteJoke: create.reducer(
      (state: JokeSliceState, action: PayloadAction<string>) => {
        state.jokes = [...state.jokes].filter(
          (joke: Joke) => joke.id !== action.payload,
        )
      },
    ),
deleteAllJokes: create.reducer(
      () =>  randomJokeInitialState
    ),



}),

selectors: {
    
    jokeData: (state: JokeSliceState) => state,
  },


})


export const jokeSliceActions = randomJokeSlice.actions

export const jokeSliceSelectors = randomJokeSlice.selectors
