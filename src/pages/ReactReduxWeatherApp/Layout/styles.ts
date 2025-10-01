import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import background   from "../assets/background.jpg"


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
   background-image: url(${background}) ;
   background-repeat: no-repeat;
  background-size: cover;
  font-family: "Inter", sans-serif;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
 linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(17.799999237060547px);
  padding-right: 85px;
  padding-left: 85px;
  border-bottom: 1px solid rgba(210, 210, 210, 1)
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 100%;
  width: fit-content;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;

`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 63px;
  height: 100%;
  align-items: center;

`
export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: white;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 50px;
  align-items: center;
  justify-content: center;
   background-image: url(${background}) ;
  
`

export const navlinkProps = (isActive: boolean) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
})
