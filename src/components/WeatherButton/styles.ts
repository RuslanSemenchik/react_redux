import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isBlue: boolean;
}

const generateButtonBorder = (isBlue: boolean) => {
  if (isBlue) {
    return "none";
  } else {
      return "1px solid rgba(23, 23, 23, 1)";
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
  border: ${({ $isBlue }) =>
  generateButtonBorder($isBlue)};
  width: ${({ $isBlue }) => ($isBlue ? "146px" : "155px")};
  height: 48px;
  border-radius: 50px;
  background-color: ${({ $isBlue}) =>
  generateButtonColor($isBlue)};
  color: #ffffff;
  font-size: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  


`;