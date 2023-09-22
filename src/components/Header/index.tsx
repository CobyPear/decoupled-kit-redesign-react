import type { ReactNode } from "react";

export const Header = ({
  handleOpen,
  children,
}: {
  handleOpen: () => void;
  children?: ReactNode;
}) => {
  return (
    <nav className="navbar sticky top-0 max-w-screen-2xl mx-auto z-10 rounded-2xl bg-white shadow-xl">
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
