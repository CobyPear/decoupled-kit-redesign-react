import clsx from "clsx";
import { type ReactNode } from "react";

interface RowOptions {
  type: "flex" | "grid";
  styles?: string | string[];
  flexOptions?: {
    direction: "row" | "col";
    wrap: boolean;
  };
  children: ReactNode;
}

export const Row = ({
  type,
  styles,
  children,
  flexOptions: { direction, wrap } = { direction: "row", wrap: false },
}: RowOptions) => {
  const gridOptions =
    type === "grid" &&
    clsx(
      "grid-cols-4 mx-4 gap-6",
      "sm:grid-cols-8 sm:mx-6",
      "lg:grid-cols-12 lg:mx-12"
    );
  const detailedOptions = gridOptions
    ? gridOptions
    : clsx(`flex-${direction}`, wrap && "flex-wrap");
  return (
    <section
      className={clsx(type, detailedOptions, styles, "max-w-[1738px] mx-auto")}
    >
      {children}
    </section>
  );
};
