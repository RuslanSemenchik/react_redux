import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/feedback/feedbackSlice"
import {
  FeedbackWrapper,
  FeedbackControl,
  Count,
  ButtonwithcountContainer,
} from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()

  const like = useAppSelector(counterSliceSelectors.like)
  const dislike = useAppSelector(counterSliceSelectors.dislike)

  const onLike = () => {
    const plusLikeAction = counterSliceActions.plusLike()
    dispatch(plusLikeAction)
  }

  const onDislike = () => {
    const plusDislikeAction = counterSliceActions.plusDislike()
    dispatch(plusDislikeAction)
  }

  const resetResults = () => {
    const resetAction = counterSliceActions.reset()
    dispatch(resetAction)
  }

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
