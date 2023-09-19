/**
 * @param props.cols - The number of columns in the grid, this is an optional prop which will default to 3 if not provided
 * @param props.children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component that can be used with the withGrid HOC component
 */
export const Grid = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={`flex flex-col lg:grid lg:grid-cols-2 flex-auto gap-4 md:max-w-screen-lg lg:max-w-screen-xl mx-auto`}
    >
      {children}
    </div>
  );
};
