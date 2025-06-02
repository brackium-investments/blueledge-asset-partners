/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = {
  containerWidth?: string;
  label?: string;
  labelTextColor?: string;
  name: string;
  autoFocus?: boolean;
  disabled?: boolean;
  border?: string;
  type: string;
  placeholder?: string;
  pl?: string;
  width?: string;
  height?: string;
  shadow?: string;
  validation?: any;
  register?: any;
  validate?: any;
  icon?: React.ReactNode;
  error?: any;
  my?: string;
  inputBg?: string;
  min?: number;
  borderColor?: string;
  minVal?: number;
  maxVal?: number;
};

const InputComponent: React.FC<InputProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const displayPassword = (): void => {
    setVisible(!visible);
  };

  const getErrorClass = (): string => {
    return props.error &&
      props.error[props.name] &&
      props.error[props.name].message
      ? "text-red border-red"
      : `${
          props.borderColor ? props.borderColor : "border-gray-500"
        }  text-color-black`;
  };

  const getPasswordIcon = (): React.ReactNode => {
    return props.type === "password" ? (
      !visible ? (
        <FaEye
          className="absolute w-[2.2rem] h-[2.2rem] top-[1.2rem] right-[1rem] text-gray-500 cursor-pointer"
          onClick={displayPassword}
        />
      ) : (
        <FaEyeSlash
          className="absolute w-[2.2rem] h-[2.2rem] top-[1.2rem] right-[1rem] text-gray-500 cursor-pointer"
          onClick={displayPassword}
        />
      )
    ) : null;
  };

  const getErrorText = (): React.ReactNode => {
    return props.error &&
      props.error[props.name] &&
      props.error[props.name].message ? (
      <small className={`text-red pt-[0.5rem]`}>
        {props.error[props.name].message}
      </small>
    ) : null;
  };

  return (
    <div
      className={`flex flex-col ${props.my ? props.my : "mb-[2rem]"} ${
        props.containerWidth ? props.containerWidth : ""
      } `}
    >
      {props.label && (
        <label
          htmlFor={props.name}
          className={`capitalize  mb-[.5rem] ${
            props.labelTextColor ? props.labelTextColor : "text-black"
          }`}
        >
          {props.label}
        </label>
      )}
      <div className="flex relative w-full">
        <input
          autoFocus={props.autoFocus}
          min={props.minVal}
          max={props.maxVal}
          disabled={props.disabled}
          type={
            props.type === "password"
              ? visible
                ? "text"
                : "password"
              : props.type
          }
          placeholder={props.placeholder}
          {...props.register(props.name, props.validation)}
          className={`${props.border ? "" : "border"} py-[1rem] relative ${
            props.pl ? props.pl : "pl-[4rem]"
          } pr-[1rem] ${props.width ? props.width : "w-full"} ${
            props.height && props.height
          } ${
            props.shadow && props.shadow
          } rounded-lg outline-0 ${getErrorClass()} md:w-full`}
        />
        {props.icon}
        {getPasswordIcon()}
      </div>
      {getErrorText()}
    </div>
  );
};

export default InputComponent;
