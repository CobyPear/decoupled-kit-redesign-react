import { ReactNode } from "react";

export const MenuOverlay = ({
  open,
  handleClose,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="absolute z-20 w-full t-0 r-100 sm:hidden">
      {open ? (
        <menu className="bg-white h-screen min-w-screen max-w-screen flex flex-col p-8 overflow-y-hidden">
          <span
            className="ml-auto mr-4 p-8 text-2xl hover:cursor-pointer"
            onClick={handleClose}
          >
            x
          </span>
          {children}
        </menu>
      ) : null}
    </div>
  );
};
