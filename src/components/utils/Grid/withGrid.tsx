import { Grid } from "@utils/Grid";

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
export const withGrid = <Props,>(Component: React.ComponentType<Props>) => {
  /**
   * @param props.data - The to be passed to the Component as the content prop
   * @param props.cols - The number of columns to build a grid with. This is an optional prop which will default to 3 if not provided
   * @default 3
   * @param props.FallbackComponent -  Component to be rendered if data is undefined
   * @returns The component passed to withGrid in a grid with the given number of columns
   */
  const GridedComponents = <Type,>({
    data,
    props,
    FallbackComponent,
  }: {
    data: Type[];
    props?: Props;
    FallbackComponent?: React.ComponentType;
  }) => {
    return (
      <>
        {data ? (
          <Grid>
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
