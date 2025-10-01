import styled from "@emotion/styled";

interface InputComponentProps {
  $error?: string | undefined;
}



export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 48px;
  padding: 12px;
  outline: none;
  flex: 1;
  padding: 12px 16px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
    
  }
`;
