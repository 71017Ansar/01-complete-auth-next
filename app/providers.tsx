"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

import { FC } from "react";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider >
    <NextUIProvider>
      <div className="min-h-screen">{children}</div>
    </NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
