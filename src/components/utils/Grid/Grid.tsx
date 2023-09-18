import { clsx } from "clsx";
/**
 * @param props.cols - The number of columns in the grid, this is an optional prop which will default to 3 if not provided
 * @param props.children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component that can be used with the withGrid HOC component
 */
export const Grid = ({
  cols = 3,
  children,
}: {
  cols?: number;
  children?: React.ReactNode;
}) => {
  return <div className={clsx(`grid-cols-${cols}`)}>{children}</div>;
};