import styled from "@emotion/styled"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
 gap: 120px;
`

export const WeatherWrapper = styled.div`
  display: flex;
flex-direction: column;
 gap: 40px;
 margin: 90px;
 
`
export const SearchForm = styled.form`
display: flex;
  
  margin-top : 120px;
  justify-content: center;
  align-items: start;
  gap: 14px;
  width: 100%;
  width: 710px;
  height: fit-content;

`
export const InputForm = styled.div`
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  
`

export const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 709px;
  min-height: 220px;
  padding: 28px;
  border-radius: 16px;
  background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
  backdrop-filter: blur(1px);
  justify-content: space-between;
  align-items: center;
`

export const TempCityContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction:column;
  gap: 5px;
  right:130px
`
export const TempCityIconsContainer = styled.div`
  display: flex;
  position: relative;
  align-items: start;
  gap: 50px;
  justify-content:space-between;
`

export const CardInfoCity = styled.p`
  font-size: 20px;
  padding-bottom: 5px;
 color: rgba(255, 255, 255, 1);
`

export const CardInfoTemp = styled.div`
  font-size: 57px;
  color: rgba(255, 255, 255, 1);
width: 89px;
height:69px;
  font-weight: bold;

`

export const CardInfoCountry = styled.p`
  font-size: 15px;
  padding-bottom: 5px;
  color: rgba(108, 108, 108, 1);

`

export const CardInfoIcon = styled.img`

  height: 74px;
  width: 74px;
`


export const IconsContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const Loading = styled.p`
  font-size: 15px;
  
  color: rgba(108, 108, 108, 1);

`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 95px;
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
 
`
export const ErrorCodText = styled.p`
  font-size: 57px;
 color: rgba(243, 94, 94, 1);

`

export const ErrorMessageText = styled.p`
  font-size: 18px;
  
  color: rgba(255, 255, 255, 1);


`

