import type { ReactNode } from "react";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <nav className="navbar sticky top-4 z-10 mt-4 w-full sm:w-10/12 mx-auto rounded-2xl bg-white">
      <a href="/">
        <figure>
          <img src="/pantheon-fist-blk.png" alt="Pantheon" width="68" height="68" />
        </figure>
      </a>
      <header>{children}</header>
    </nav>
  );
};
