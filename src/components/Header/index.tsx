import type { ReactNode } from "react";

export const Header = ({
  handleOpen,
  children,
}: {
  handleOpen: () => void;
  children?: ReactNode;
}) => {
  return (
    <nav className="navbar max-w-[1738px] mx-auto z-10">
      <a href="/">
        <img
          src="/pantheon-fist-blk.png"
          alt="Pantheon"
          width="68"
          height="68"
        />
      </a>
      <section className="hidden sm:flex">{children}</section>
      <button onClick={handleOpen} className="ml-auto mr-8 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>
  );
};
