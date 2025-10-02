import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isBlue: boolean;
  $isWidth:boolean
}

const generateButtonWidth = (isBlue: boolean, isWidth: boolean) => {
  if (isBlue&&isWidth) {
    return "100%";
  }  else if (isBlue) {
      return "146px";
    } else {
      return "155px";
    }
  };

const generateButtonBorder = (isBlue: boolean) => {
  if (isBlue) {
    return "none";
  } else {
      return "1px solid rgba(248, 243, 243, 1)";
    }
  };

const generateButtonColor = (isBlue: boolean) => {
  
    if (isBlue) {
      return "rgba(54, 120, 180, 1)";
    } else {
      return "transparent";
    }
  
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
width: ${({$isBlue, $isWidth}) =>
generateButtonWidth($isBlue,$isWidth)} ;



  border: ${({ $isBlue }) =>
  generateButtonBorder($isBlue)};
  /* width: ${({ $isBlue }) => ($isBlue ? "146px" : "155px")}; */
  height: 48px;
  border-radius: 50px;
  background-color: ${({ $isBlue}) =>
  generateButtonColor($isBlue)};
  color: #ffffff;
  font-size: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  


`;