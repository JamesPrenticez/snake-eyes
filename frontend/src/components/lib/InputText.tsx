import React, { type ReactElement } from "react";

interface Props {
  id?: string;
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange?: (e: any) => void;
}

const InputText = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}: Props): ReactElement => {
  return (
    <label
      htmlFor={label}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.25rem",
        fontWeight: 500,
      }}
    >
      {label}
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        className={`ring-1 ring-theme-tertiary focus:ring-theme-quaternary outline-none ml-[0.25rem] px-[0.5rem] py-[0.25rem] rounded-sm grow w-full placeholder-gray-500`}
        onChange={onChange}
      />
    </label>
  );
};

export default InputText
