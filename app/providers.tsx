"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

import { FC } from "react";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="min-h-screen">{children}</div>
    </NextUIProvider>
  );
};

export default Providers;
