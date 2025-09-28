export interface Joke {
    id : string,
    setup : string,
    punchline : string,  
     
}

export interface JokeSliceState{
    jokes : Joke [],
    error : string | undefined,
    isFetching: boolean,
}