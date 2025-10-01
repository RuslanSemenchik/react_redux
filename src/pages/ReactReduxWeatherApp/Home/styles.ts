import styled from "@emotion/styled"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: black;
`

export const SearchForm = styled.form`
  display: flex;
  
  justify-content: center;
  align-items: center;
  gap: 14px;
  width: 100%;
  max-width: 600px;

`
export const InputForm = styled.div`
  flex: 1;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  
`





export const CardContainer = styled.form`
  display: flex;
  flex-direction: row;
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