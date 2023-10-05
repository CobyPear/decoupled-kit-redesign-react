import clsx from "clsx";
import { type ReactNode } from "react";

interface RowOptions {
  type: "flex" | "grid";
  styles?: string | string[];
}

export const Row = ({
  options,
  children,
}: {
  options: RowOptions;
  children: ReactNode;
}) => {
  const gridOptions =
    options.type === "grid" &&
    clsx(
      "grid-cols-4 mx-4 gap-6",
      "sm:grid-cols-8 sm:mx-6",
      "lg:grid-cols-12 lg:mx-12"
    );
  const detailedOptions = gridOptions ? gridOptions : "flex-col";
  return (
    <section className={clsx(options.type, detailedOptions, options.styles)}>
      {children}
    </section>
  );
};
