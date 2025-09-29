import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { NAV_MENU_ROUTES, ROUTES } from "../constants/navMenuRoutes"
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import { v4 as uuidv4 } from "uuid"

import {
  CardContainer,
  CardInfoCountry,
  CardInfoIcon,
  ButtonControl,
  CardWrapper,
  CardInfoTemp,
  CardInfoCity,
  InputsContainer,
} from "./styles"


import { useAppDispatch,useAppSelector } from "store/hooks"
import { weatherActions, weatherSelectors } from "store/redux/weather/weatherSlice"
import { Weather } from "store/redux/weather/types"

function Home() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const weathers = useAppSelector(weatherSelectors.weathers)



  const validationSchema = Yup.object().shape({
    inputCity : Yup.string()
      .min(1, "Name must be at least 2 characters")
      .max(50, "Name must be no more than 50 characters")
      // .required("Name is required"),
   
  })

  const formik = useFormik({
    initialValues: {
      inputCity: "",
     
    },
    validationSchema,
    validateOnMount : false,
    validateOnChange : false,

    onSubmit:( values, helpers) => {
     const city: string  = values.inputCity

      dispatch(weatherActions.getWeather(city))
      // navigate(ROUTES.WEATHERS)
      helpers.resetForm()
    },
   
  })



const weatherCard = weathers.map((weather: Weather )=>{
    return (
        <CardWrapper key={weather.id}>
        <CardInfoTemp>{weather.temp}</CardInfoTemp>
        <CardInfoCity>{weather.name}</CardInfoCity>
        <CardInfoIcon
            src={`http://openweathermap.org/img/w/${weather.icon}.png`}
            alt={weather.name}
            title={weather.name}
           >{weather.name}
         
        </CardInfoIcon>
        <CardInfoCountry>{weather.country}</CardInfoCountry>
        <ButtonControl>
          <Button
            onClick={() => dispatch(weatherActions.saveWeather(weather))}
            name="Save"
          />
        </ButtonControl>

<ButtonControl>
          <Button
            onClick={() => dispatch(weatherActions.deleteWeather(weather.id))}
            isRed
            name="Delete"
          />
        </ButtonControl>


      </CardWrapper>
    )
 }
)


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
        <Button name="Search" type="submit" />
      </CardContainer>



  


      {!!weathers.length && (
        <CardContainer>
          {weatherCard}
        </CardContainer>
      )}

    </CardWrapper>
  )


}

export default Home


