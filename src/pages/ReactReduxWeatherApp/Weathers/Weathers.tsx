import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice"

import Button from "components/Button/Button"
import {
  ButtonControl,
  CardContainer,
  WeatherWrapper,
  CardInfoTemp,
  CardInfoCity,
  CardInfoCountry,
  CardInfoIcon,
  IconsContainer
 
} from "./styles"

function Weathers() {
  const dispatch = useAppDispatch()
  const weathers = useAppSelector(weatherSelectors.weathers)

  const deleteWeather = (id: string) => {
    dispatch(weatherActions.deleteWeather(id))
  }

  const deleteAllCards = () => {
    dispatch(weatherActions.deleteAllWeathers())
  }

  
    

  return (
    <WeatherWrapper>
      
        {weathers.map(weather => (
          <CardContainer key={weather.id}>
            <CardInfoTemp>{weather.temp}°C</CardInfoTemp>
            <CardInfoCity>{weather.name}</CardInfoCity>
             {(() => {
                  const icons = []
                  for (let i = 0; i < 3; i++) {
                    icons.push(
                      <CardInfoIcon
                        key={i}
                        src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                        alt={weather.name}
                        title={weather.name}
                      />
                    )
                  }
                  return <IconsContainer>{icons}</IconsContainer>
                })()}
    
            <CardInfoCountry>{weather.country}</CardInfoCountry>

            <ButtonControl>
              <Button
                onClick={() => deleteWeather(weather.id)}
                name="Delete"
                isRed
              />
            </ButtonControl>
          </CardContainer>
        ))}
      

      {!!weathers.length && (
        <ButtonControl>
          <Button
            name="Remove All Weathers"
            isRed
            onClick={deleteAllCards}
          />
        </ButtonControl>
      )}
    </WeatherWrapper>
  )
}

export default Weathers