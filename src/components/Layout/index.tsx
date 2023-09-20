import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-full min-w-full">
      <Header>
        <ul className="p-2 menu-vertical sm:menu-horizontal">
          {["Articles", "Pages"].map((item, index) => (
            <li className="mx-2 text-lg bg text-black" key={index}>
              <a className="link" href={`/${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Header>
      <main className="mx-auto">{children}</main>
      <Footer></Footer>
    </div>
  );
};
