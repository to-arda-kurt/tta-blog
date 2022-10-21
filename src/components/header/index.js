import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center text-lg py-6 sm:px-4 text-gray-dark dark:text-white">
      <Logo />
      <Navigation />
    </header>
  );
};
