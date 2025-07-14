import * as globalStyles from "../styles/globals.css";
import * as globalTypes from "../types/global";
import throttle from "lodash.throttle";
import { useMemo } from "react";

export const Button = ({
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
  children,
  ...rest
}: globalTypes.ButtonProps) => {

  const throttledClick = useMemo(
    () =>
      throttle(() => {
        onClick();
      }, 1000),
    []
  );

  return (
    <button
      type={type}
      onClick={throttledClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={globalStyles.button}
      {...rest}
    >
      {children}
    </button>
  );
};
