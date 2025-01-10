"use client";
import { FC } from "react";

interface Props {
  label: string;
}

const AuthSubmitButton: FC<Props> = ({ label }) => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full text-center bg-white text-black rounded-small p-2 cursor-pointer"
    >
      {label}
    </button>
  );
};

export default AuthSubmitButton;
