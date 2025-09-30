import styled from "@emotion/styled"

export const WeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: black;
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: black;
`

export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;
  gap: 30px;
`

export const CardInfoCity = styled.p`
  font-size: 15px;
  padding-bottom: 5px;
  color: rgba(108, 108, 108, 1);
`

export const CardInfoTemp = styled.a`
  font-size: 29px;
  color: #3d3c3cff;
  font-weight: bold;

`

export const CardInfoCountry = styled.p`
  font-size: 15px;
  padding-bottom: 5px;
  color: rgba(108, 108, 108, 1);

`

export const CardInfoIcon = styled.img`
 display: flex;
  gap: 16px;
  font-size: 16;
`


export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const ButtonControl = styled.div`
  min-width: 100px;
  height : 70px;
`


export const IconsContainer = styled.div`
  display: flex;
  gap: 30px;
`