import { Grid } from "@components/Grid/Grid";

/**
 *
 * @param Component - A component that takes in content that is to be displayed on the grid
 * @remarks
 * The Component used must accept the data to be displayed as `content` to function properly
 * @example
 * ```
 * const ArticleCard= ({ content }) => {
 * 	return (
 * 		<div>
 * 			<h2>{content.title}</h2>
 * 			<div>{content.excerpt}</div>
 * 		</div>
 * 	)
 * }
 * ```
 * @returns A Higher Order Component that returns the data mapped to the Component in a grid
 * @example
 * ```
 * const MyPage = ({ myArticles }) => {
 *  const ArticleGrid = withGrid(ArticleCard)
 * 	 return (
 * 		 <>
 * 			 <ArticleGrid
 * 				 data={myArticles}
 * 				 cols={4}
 * 				 FallbackComponent={() => <span>No Data Found</span>}
 * 			 />
 * 		 </>
 * 	 )
 * }
 * ```
 */
/**
 * @param props.data - The to be passed to the Component as the content prop
 * @param props.FallbackComponent -  Component to be rendered if data is undefined
 * @returns The component passed to withGrid in a grid with the given number of columns
 */
export const withGrid = <Props,>(Component: React.ComponentType<Props>) => {
  const GridedComponents = <DataType,>({
    data,
    FallbackComponent,
    ...props
  }: {
    data: DataType[];
    FallbackComponent?: React.ComponentType;
    props?: Props;
    // necessary to workaround TS bug
  } & {
    [P in keyof Props]?: Props[P];
  }) => {
    return (
      <>
        {data ? (
          <Grid items={data.length}>
            {data.map((content, i) => {
              return (
                <Component
                  key={i}
                  content={content}
                  // need to cast to Props here due to a TS issue
                  // see https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
                  {...(props as Props)}
                />
              );
            })}
          </Grid>
        ) : FallbackComponent ? (
          <FallbackComponent />
        ) : null}
      </>
    );
  };
  GridedComponents.displayName = `${Component?.displayName}-Grid`;
  return GridedComponents;
};
