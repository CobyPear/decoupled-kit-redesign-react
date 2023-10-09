import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Row } from "@components/Row";
import clsx from "clsx";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  const path = window.location.pathname;
  console.log(path);
  return (
    <Row type="flex" styles={["mx-auto max-w-full min-w-full min-h-screen flex-col"]}>
      <header className="bg-white">
        <Header>
          <ul className="p-2 menu-vertical sm:menu-horizontal">
            {[
              ["Home", "/"],
              ["Articles", "/articles"],
              ["Pages", "/pages"],
            ].map(([label, href], index) => (
              <li className="px-2 text-lg text-black" key={index}>
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
      <main>{children}</main>
      <Footer></Footer>
    </Row>
  );
};
