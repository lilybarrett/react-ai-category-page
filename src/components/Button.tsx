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

  // TODO In normal circumstances, we won't want to throttle *all* of our buttons
  // let's extract this out to our onClick handlers so we have more control over when we do this
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
