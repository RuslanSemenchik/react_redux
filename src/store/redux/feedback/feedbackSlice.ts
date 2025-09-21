import { createAppSlice } from "store/createAppSlice";
import { FeedbackSliceState } from "./types";
const feedbackInitialState : FeedbackSliceState = {
    like : 0,
    dislike : 0
}
 export const feedbackSlice = createAppSlice({
    name : "FEEDBACK", 
     // initialState - state, в котором мы прописываем значения по умолчанию
    initialState : feedbackInitialState,
    // reducers - это функция, которая возвращает обьект содержащий функции редьюсеры, которые будут изменять стейт
    reducers : (create)=>({
        plusLike: create.reducer((state : FeedbackSliceState )=>{
            state.like = state.like + 1;
        }),
        plusDislike: create.reducer((state : FeedbackSliceState )=>{
            state.dislike = state.dislike + 1;
        }),
        reset: create.reducer(
            (state : FeedbackSliceState)=>{
            state.like = 0
            state.dislike = 0
        }),
       
        
    }),
     // selectors - мы прописываем, какие именно данные мы хотим отдать компонентам
    selectors: {
    like: (state: FeedbackSliceState) => {
      return state.like
    },
    dislike : (state: FeedbackSliceState) => {
      return state.dislike
    },
  },

})

// counterSlice сам создает actions для каждого отдельного reducer
  export  const counterSliceActions = feedbackSlice.actions

// counterSliceSelectors - это данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
  export const counterSliceSelectors = feedbackSlice.selectors