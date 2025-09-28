import { JokeCard, PageWrapper,JokeText,JokeWrapper,JokesContainer,ButtonControl } from "./styles"
import Button from "components/Button/Button"
import { jokeSliceActions, jokeSliceSelectors } from "store/redux/randomJoke/randomJokeSlice"
import { type Joke } from "store/redux/randomJoke/types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"
function Homework_18() {
 const dispatch = useAppDispatch();

 const {jokes, error,isFetching} = useAppSelector(
    jokeSliceSelectors.jokeData

 )
 const getJoke = ()=>{
    dispatch(jokeSliceActions.getJoke("Some Foto"))
 }
 
 useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])



 const randomJokes = jokes.map((joke :Joke )=>{
    return (
        <JokeWrapper key={joke.id}>
        <JokeText>{`${joke.setup} ${joke.punchline}`}</JokeText>
        <ButtonControl>
          <Button
            onClick={() => dispatch(jokeSliceActions.deleteJoke(joke.id))}
            isRed
            name="Delete"
          />
        </ButtonControl>
      </JokeWrapper>
    )
 })

 

  return (
    <PageWrapper>
      <JokeCard>
        {!!jokes.length && (
        <ButtonControl>
          <Button name="Delete All Jokes" isRed onClick={() => dispatch(jokeSliceActions.deleteAllJokes())} />
        </ButtonControl>
      )}
        <JokesContainer>{randomJokes}</JokesContainer>
        <Button
          disabled={isFetching}
          name="Get Random Joke"
          onClick={getJoke}
        />
      </JokeCard>
    </PageWrapper>
  )
}
export default Homework_18
