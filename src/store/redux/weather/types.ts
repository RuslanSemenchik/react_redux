export interface Weather {
  id: number,
  name: string,
  country: string,
  temp: number,
  icon: string
};

export interface WeatherSliceState {
 
  weathers: Weather [],
  error : string | undefined,
  isFetching: boolean,
}
