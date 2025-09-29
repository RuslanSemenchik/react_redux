import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #112233;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 47px 81px;
  color: black;
  border: 2px solid black;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: darkblue;
  height: 100%;
  width: fit-content;
  cursor: pointer;
  font-weight: bold;
  font-size: 34px;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 45px;
  height: 100%;
  align-items: center;
`
export const HeaderLink = styled(NavLink)`
  color: black;
  font-size: 28px;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 50px;
  align-items: center;
  justify-content: center;
  background-color: #112233;
`

export const navlinkProps = (isActive: boolean) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
})
