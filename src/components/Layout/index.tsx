import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { MenuOverlay } from "@components/MenuOverlay";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  const path = window.location.pathname;

  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    addEventListener("keydown", listener);
    return () => removeEventListener("keydown", listener);
  });
  const navItems = [
    ["Home", "/"],
    ["Articles", "/articles"],
    ["Pages", "/pages"],
  ].map(([label, href], index) => (
    <li className="mx-2 text-lg text-black" key={index}>
      <a
        className={clsx("link-hover", path.endsWith(href) && "font-bold")}
        href={href}
      >
        {label}
      </a>
    </li>
  ));
  return (
    <>
      <MenuOverlay open={open} handleClose={handleModal}>
        {navItems}
      </MenuOverlay>
      <div className="mx-auto max-w-full min-w-full absolute h-fit">
        <header className="p-6">
          <Header handleOpen={handleModal}>
            <menu className="p-2 menu-vertical sm:menu-horizontal">
              {navItems}
            </menu>
          </Header>
        </header>
        <main className="mx-auto">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};
