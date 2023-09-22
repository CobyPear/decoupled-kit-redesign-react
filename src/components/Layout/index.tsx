import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import clsx from "clsx";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div className="mx-auto max-w-full min-w-full absolute h-fit">
      <header className="p-6">
      <Header>
        <ul className="p-2 menu-vertical sm:menu-horizontal">
          {[["Home", '/'], ["Articles", '/articles'], ["Pages", '/pages']].map(([label, href], index) => (
            <li className="mx-2 text-lg text-black" key={index}>
              <a
                className={clsx(
                  "link-hover",
                  path.endsWith(href) && "font-bold"
                )}
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Header>
      </header>
      <main className="mx-auto">{children}</main>
      <Footer></Footer>
    </div>
  );
};
