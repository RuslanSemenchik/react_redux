import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function WeatherButton({
  type = "button",
  name,
  onClick = () => {},
  children,
  isBlue = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isBlue={isBlue}
      onClick={onClick}
      type={type}
    >
      {/* Улосвный рендеринг */}
      {!children && name}
      {children}
    </ButtonComponent>
  );
}

export default WeatherButton;