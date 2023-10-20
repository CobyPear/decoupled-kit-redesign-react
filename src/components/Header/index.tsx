import { Button } from "@components/Button";
import type { ReactNode } from "react";

export const Header = ({
  handleOpen,
  children,
}: {
  handleOpen: () => void;
  children?: ReactNode;
}) => {
  return (
    <nav className="navbar max-w-[1920px] mx-auto z-10">
      <a href="/">
        <img
          src="/pantheon-fist-blk.png"
          alt="Pantheon"
          width="68"
          height="68"
        />
      </a>
      <section className="hidden sm:flex">{children}</section>
      <Button type="icon" onClick={handleOpen} styles="ml-auto mr-8 sm:hidden">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="white" />
          <path
            d="M9 12H31"
            stroke="#171717"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M9 20H31"
            stroke="#171717"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M9 28L31 28"
            stroke="#171717"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </Button>
    </nav>
  );
};
