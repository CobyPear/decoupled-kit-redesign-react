import { clsx } from "clsx";
/**
 * @param props.cols - The number of columns in the grid, this is an optional prop which will default to 3 if not provided
 * @param props.children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component that can be used with the withGrid HOC component
 */
export const Grid = ({
  items,
  children,
}: {
  items: number;
  children?: React.ReactNode;
}) => {
  console.log({ items });
  return (
    <div
      className={clsx(
        "flex flex-col",
        "flex-auto gap-4",
        "lg:grid lg:grid-cols-2",
        items === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2",
        "md:max-w-screen-lg lg:max-w-screen-xl mx-auto"
      )}
    >
      {children}
    </div>
  );
};
