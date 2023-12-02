import { InputProps } from "./input.props";
import { ForwardedRef, forwardRef } from "react";
import { InputContainer } from "./input.styles";
import errorSVG from "./error.svg"

const Input = forwardRef(
  (
    { error, labelText, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <InputContainer>
        <label className={error ? "error" : ""}>
          <span>{labelText}</span>
          <input ref={ref} {...props} />
          <img src={errorSVG}/>
        </label>
      </InputContainer>
    );
  }
);

export default Input;
