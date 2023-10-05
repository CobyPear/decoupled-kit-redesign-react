import type { ReactNode } from "react";

export const Header = ({ children }: { children?: ReactNode }) => {
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
      <section>{children}</section>
    </nav>
  );
};
