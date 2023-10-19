import { Row } from "@components/Row";
/**
 * @param props.children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component that can be used with the withGrid HOC component
 */
export const Grid = ({ children }: { children?: React.ReactNode }) => {
  return <Row type="grid">{children}</Row>;
};
