import { ReactNode } from "react";

export const Footer = ({ children }: { children?: ReactNode }) => {
  return (
    <footer className="footer footer-center mt-auto bg-stone-700 text-white">
      <aside>
        <figure className="mt-16">
          <img width="118" height="118" src="/pantheon-fist-wht.png" />
        </figure>
        <span className="font-bold text-xl">Pantheon Decoupled Kit</span>
        <span className="">©️ Pantheon {new Date().getFullYear()}</span>
      </aside>
      <nav className="mb-16">
        <ul className="menu-horizontal">
          <li>
            <a className="link" href="/storybook-static/index.html">Storybook</a>
          </li>
        </ul>
        <span>
          Built with
          <a href="https://pantheon.io" className="link">
            {" "}
            Pantheon.io
          </a>
        </span>
      </nav>
      {children}
    </footer>
  );
};
