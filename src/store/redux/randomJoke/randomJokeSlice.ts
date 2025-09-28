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
     async () => {
        
        const response = await axios.get(RANDOM_JOKE_URL)
        return response
      },
{pending : (state : JokeSliceState) =>{
    state.error = undefined;
    state.isFetching = true;
},
fulfilled : (state : JokeSliceState, action)=>{
    state.jokes = [...state.jokes, {setup : action.payload.data.setup, punchline: action.payload.data.punchline, id :action.payload.data.id }];
   state.isFetching = false;
},
rejected : (state: JokeSliceState, action) =>{
    
    state.isFetching = true;
     if (action.error.code === "ERR_BAD_REQUEST") {
            state.error = "Too Many Requests"
          } else {
            state.error = "Some Network Error"
          }
}

} ),

deleteJoke: create.reducer(
      (state: JokeSliceState, action: PayloadAction<string>) => {
        state.jokes = [...state.jokes].filter(
          (joke: Joke) => joke.id !== action.payload,
        )
      },
    ),
deleteAllJokes: create.reducer(
      (state: JokeSliceState,) => 
       state = randomJokeInitialState
        
      
    ),



}),

selectors: {
    // catFacts: (state: CatFactSliceState) => state.catFacts,
    // error: (state: CatFactSliceState) => state.error,
    jokeData: (state: JokeSliceState) => state,
  },


})


export const jokeSliceActions = randomJokeSlice.actions

export const jokeSliceSelectors = randomJokeSlice.selectors
