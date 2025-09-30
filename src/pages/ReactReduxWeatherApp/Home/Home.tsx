import { useFormik } from "formik"
import * as Yup from "yup"
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import {
  CardContainer,
  CardInfoCountry,
  CardInfoIcon,
  ButtonControl,
  CardWrapper,
  CardInfoTemp,
  CardInfoCity,
  InputsContainer,
  IconsContainer,
  Loading
} from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice"

function Home() {
  const dispatch = useAppDispatch()

  const searchWeather = useAppSelector(weatherSelectors.searchWeather)
  const error = useAppSelector(weatherSelectors.error)
  const isFetching = useAppSelector(weatherSelectors.isFetching)

  const validationSchema = Yup.object().shape({
    inputCity: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name must be no more than 50 characters"),
  })

  const formik = useFormik({
    initialValues: {
      inputCity: "",
    },
    validationSchema,
    validateOnMount: false,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      const city: string = values.inputCity

      dispatch(weatherActions.getWeather(city))
      helpers.resetForm()
    },
  })



  return (
    <CardWrapper>
      <CardContainer onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="inputCity-id"
            name="inputCity"
            type="text"
            placeholder="Enter your city"
            label=""
            value={formik.values.inputCity}
            onChange={formik.handleChange}
          />
        </InputsContainer>
        <Button name="Search" type="submit" disabled={isFetching} />
         {isFetching && <Loading>Loading...</Loading>}
      </CardContainer>

      {searchWeather && (
        <CardContainer>
          <CardInfoTemp>{searchWeather.temp}°C</CardInfoTemp>
          <CardInfoCity>{searchWeather.name}</CardInfoCity>
    {(() => {
      const icons = []
      for (let i = 0; i < 3; i++) {
        icons.push(
          <CardInfoIcon
            key={i}
            src={`http://openweathermap.org/img/w/${searchWeather.icon}.png`}
            alt={searchWeather.name}
            title={searchWeather.name}
          />
        )
      }
      return <IconsContainer>{icons}</IconsContainer>
    })()}
          <CardInfoCountry>{searchWeather.country}</CardInfoCountry>
          <ButtonControl>
            <Button
              onClick={() =>
                dispatch(weatherActions.saveWeather(searchWeather))
              }
              name="Save"
            />
          </ButtonControl>
          <ButtonControl>
            <Button
              onClick={() => dispatch(weatherActions.deleteSearchWeather())}
              name="Delete"
              isRed
            />
          </ButtonControl>
        </CardContainer>
      )}
      {error && (
        <CardContainer>
          <CardInfoCity> {error.cod}</CardInfoCity>
          <CardInfoCountry>{error.message}</CardInfoCountry>
          <ButtonControl>
            <Button
              onClick={() => dispatch(weatherActions.deleteError())}
              name="Delete"
              isRed
            />
          </ButtonControl>
        </CardContainer>
      )}
    </CardWrapper>
  )
}

export default Home
