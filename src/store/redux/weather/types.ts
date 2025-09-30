export interface Weather {
  id: string,
  name: string,
  country: string,
  temp: number,
  icon: string
};

export interface WeatherSliceState {
  searchWeather? : Weather | undefined,
  weathers: Weather [],
  error : WeatherError | undefined,
  isFetching: boolean,
}
export interface WeatherError {
  cod: string;
  message: string;
}