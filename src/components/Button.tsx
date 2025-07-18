import * as globalStyles from "../styles/globals.css";
import * as globalTypes from "../types/global";

export const Button = ({
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
  children,
  ...rest
}: globalTypes.ButtonProps) => {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={globalStyles.button}
      {...rest}
    >
      {children}
    </button>
  );
};
