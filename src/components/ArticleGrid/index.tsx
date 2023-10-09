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
  const twoArticles = articles === 2;
  const oddArticles = !oneArticle && articles % 2 === 1;

  const figure = createSelector("[&>figure]");
  const section = createSelector("[&>section]");
  const figureImage = createSelector("[&>figure>img]");

  return (
    <article
      className={clsx(
        "card card-compact shadow-xl bg-white",
        oneArticle
          ? `col-span-4 sm:col-start-2 sm:col-span-6 sm:card-side lg:col-start-3 lg:col-span-12`
          : twoArticles ? "col-span-4 sm-col-span-3 sm:first:col-start-1 lg:first:col-start-3"
          : "col-span-4 sm:col-span-3 sm:first:col-start-2 lg:first:col-start-1 lg:col-span-4",
        oneArticle && [
          figure("sm:max-w-1/2"),
          figureImage("h-full"),
          section("sm:max-w-1/2"),
        ],
        oddArticles &&
          `last:sm:card-side last:sm:col-span-6 last:sm:col-start-2 last:lg:card last:lg:col-span-4`, //[&>section]:last:sm:w-1/2 [&>section]:last:lg:w-full`,
        // oddArticles && sideImage,
        oddArticles && [
          figure("last:sm:max-md:w-1/2"),
          figureImage("h-full"),
          section("last:sm:max-md:w-1/2"),
          // "[&>figure>img]:h-full"
        ]
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
      <figure className="max-w-1/2">
        <img className="max-w-1/2"
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
        <section className="card-actions flex-col flex-shrink mb-auto p-2">
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
