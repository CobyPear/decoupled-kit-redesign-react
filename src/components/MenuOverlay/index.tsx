import { Button } from "@components/Button";
import { ReactNode } from "react";

export const MenuOverlay = ({
  open,
  handleClose,
  children,
  className,
}: {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`absolute z-20 w-full bg-neutral-200 sm:hidden ${className}`}
    >
      {open ? (
        <menu className="h-screen min-w-screen max-w-screen flex flex-col p-8">
          <Button
            type="icon"
            styles="ml-auto mr-4 text-2xl hover:cursor-pointer"
            onClick={handleClose}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M11 11L29 29" stroke="black" strokeWidth="2" />
              <path d="M29 11L11 29" stroke="black" strokeWidth="2" />
            </svg>
          </Button>
          {children}
        </menu>
      ) : null}
    </div>
  );
};
