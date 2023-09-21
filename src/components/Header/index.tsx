import type { ReactNode } from "react";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <nav className="navbar sticky top-0 max-w-screen-2xl mx-auto z-10 rounded-2xl bg-white shadow-xl">
      <a href="/">
        <figure>
          <img
            src="/pantheon-fist-blk.png"
            alt="Pantheon"
            width="68"
            height="68"
          />
        </figure>
      </a>
      <header>{children}</header>
    </nav>
  );
};
