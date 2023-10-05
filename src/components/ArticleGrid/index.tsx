import { Button } from "@components/Button";
import { withGrid } from "@components/Grid/withGrid";
import { createSelector } from "@lib/createSelector";
import clsx from "clsx";

interface ArticleCardProps {
  content: {
    body: {
      summary: string | null;
    };
    title: string;
    field_media_image: {
      field_media_image: {
        resourceIdObjMeta: {
          alt: string;
        };
        uri: {
          url: string;
        };
      };
    };
    path: {
      alias: string;
    };
  };
  articles: number;
}

const ArticleCard = ({ content, articles }: ArticleCardProps) => {
  const oneArticle = articles === 1;
  const oddArticles = !oneArticle && articles % 2 === 1;

  const figure = createSelector("[&>figure]");
  const section = createSelector("[&>section]");
  const figureImage = createSelector("[&>figure>img]");

  return (
    <article
      className={clsx(
        "card card-compact shadow-xl bg-white lg:col-span-8 w-ull",
        oneArticle
          ? `col-span-4 sm:col-start-2 sm:col-span-6 sm:card-side lg:col-start-1 lg:col-span-8`
          : "col-span-4 sm:col-span-3 sm:first:col-start-2 lg:col-span-2",
        oneArticle && [
          figure("sm:w-1/2"),
          section("sm:w-1/2"),
          // "[&>section]:sm:w-1/2",
          // section("col-span-4"),
          // figure("col-span-4", "aspect-square"),
          // "[&>figure>img]:h-full",
          figureImage("h-full"),
        ],
        oddArticles &&
          `last:sm:card-side last:sm:col-span-6 last:sm:col-start-2 last:lg:card last:lg:col-span-2`, //[&>section]:last:sm:w-1/2 [&>section]:last:lg:w-full`,
        // oddArticles && sideImage,
        ""
        // "min-w-md max-w-m",
        // oneArticle && "card card-side",
        // oneArticle && "card card-side col-start-4 col-span-6",
        // oddArticles &&
        //   "last:lg:max-xl:card-side last:lg:max-xl:col-span-2 last:lg:max-xl:min-w-fit last:lg:max-xl:max-w-screen-md max-h-[480px] [&>figure>img]:last:lg:max-xl:aspect-square [&>figure>img]:last:lg:max-xl:max-w-lg",
        // OR:
        // oddArticles && [
        //   lastLgMaxXl(
        //     "card-side",
        //     "col-span-2",
        //     "min-w-fit",
        //     "max-w-screen-md",
        //     "max-h-[480px]",
        //     "text-start"
        //   ),
        //   lastImage("aspect-square"),
        //   // OR:
        //   // lastLgMaxXl("col-span-2"),
        //   // lastLgMaxXl("min-w-fit"),
        //   // etc...
        //   // lastImage("aspect-square"),
        //   // etc...
        // ]
      )}
    >
      <figure>
        <img
          alt={
            content.field_media_image.field_media_image.resourceIdObjMeta.alt
          }
          src={
            import.meta.env.VITE_BACKEND_URL +
            content.field_media_image.field_media_image.uri.url
          }
          loading="lazy"
        />
      </figure>
      <section className="card-body">
        <h2 className="text-black card-title">{content.title}</h2>
        <section className="card-actions flex-col flex-grow mb-auto p-2">
          <p className="my-4">
            {content.body.summary ? content.body.summary : null}
          </p>
          <Button
            Element="a"
            size="large"
            styles="capitalize"
            href={content.path.alias}
          >
            View
          </Button>
        </section>
      </section>
    </article>
  );
};

ArticleCard.displayName = "ArticleCard";

export const ArticleGridCards = withGrid(ArticleCard);
