import { useFormik } from "formik"
import * as Yup from "yup"
import WeatherButton from "components/WeatherButton/WeatherButton"
import InputSearchForm from "components/InputSearchForm/InputSearchForm"
import {
  SearchForm,
  CardContainer,
  CardInfoCountry,
  CardInfoIcon,
  
  HomeWrapper,
  CardInfoTemp,
  CardInfoCity,

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
    <HomeWrapper>
      <SearchForm onSubmit={formik.handleSubmit}>
        
          <InputSearchForm
            id="inputCity-id"
            name="inputCity"
            type="text"
            placeholder="Enter your city"
            label=""
            value={formik.values.inputCity}
            onChange={formik.handleChange}
          />
      
        <WeatherButton 
        name="Search" 
        type="submit" 
        disabled={isFetching}
        isBlue 
        />
         {isFetching && <Loading>Loading...</Loading>}
       
      </SearchForm>

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
         
            <WeatherButton
              onClick={() =>
                dispatch(weatherActions.saveWeather(searchWeather))
              }
              name="Save"
            
            />
          
          
            <WeatherButton
              onClick={() => dispatch(weatherActions.deleteSearchWeather())}
              name="Delete"
              
            />
          
        </CardContainer>
      )}
      {error && (
        <CardContainer>
          <CardInfoCity> {error.cod}</CardInfoCity>
          <CardInfoCountry>{error.message}</CardInfoCountry>
          
            <WeatherButton
              onClick={() => dispatch(weatherActions.deleteError())}
              name="Delete"
             
            />
        </CardContainer>
      )}
    </HomeWrapper>
  )
}

export default Home
