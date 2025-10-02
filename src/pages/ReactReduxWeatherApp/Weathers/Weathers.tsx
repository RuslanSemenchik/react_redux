import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice"

import WeatherButton from "components/WeatherButton/WeatherButton"
import {
  WeatherWrapper,
  WeatherCard,
  CardInfoIcon,
  CardInfoTemp,
  CardInfoCity,
  TempCityContainer,
  TempCityIconsContainer,
  IconsContainer,
} from "../styles/pagestyles"

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
        <WeatherCard key={weather.id}>
          <TempCityIconsContainer>
            <TempCityContainer>
              <CardInfoTemp>{Number(weather.temp.toFixed(0))}°</CardInfoTemp>
              <CardInfoCity>{`${weather.name} ${weather.country}`}</CardInfoCity>
            </TempCityContainer>
            {(() => {
              const icons = []
              for (let i = 0; i < 3; i++) {
                icons.push(
                  <CardInfoIcon
                    key={i}
                    src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                    alt={weather.name}
                    title={weather.name}
                  />,
                )
              }
              return <IconsContainer>{icons}</IconsContainer>
            })()}
          </TempCityIconsContainer>
          <WeatherButton
            onClick={() => deleteWeather(weather.id)}
            name="Delete"
          />
        </WeatherCard>
      ))}

      {!!weathers.length && (
        <WeatherButton
          name="Delete all cards"
          isBlue
          isWidth
          onClick={deleteAllCards}
        />
      )}
    </WeatherWrapper>
  )
}

export default Weathers
