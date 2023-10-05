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
  const oddArticles = articles % 2 === 1;

  const lastLgMaxXl = createSelector("last:lg:max-xl", "last");
  const lastImage = createSelector("[&>figure>img]");
  const image = createSelector("[&>figure>img]");
  console.log(lastImage("hi"), lastLgMaxXl("test"));
  // console.log("lastLgMaxXl", lastLgMaxXl("card-side", "col-span-2"));
  // console.log(lastImage("aspect-square"));
  return (
    <article
      className={clsx(
        "card card-compact shadow-xl bg-white max-h-[554px]",
        oneArticle && "card-side col-span-4 sm:col-start-2 sm:col-span-6 lg:col-start-3 lg:col-span-8",
        oneArticle && image("aspect-square"),
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
      <figure className="w-1/2">
        <img
        className="h-full"
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
      <section className="card-body w-1/2">
        <h2 className="text-black card-title">{content.title}</h2>
        <section className="card-actions h-full">
          <p className="my-4">
            {content.body.summary
              ? content.body.summary
              : content.field_media_image.field_media_image.resourceIdObjMeta
                  .alt}
          </p>
          <Button Element="a" size="large" styles="capitalize" href={content.path.alias}>
            View
          </Button>
        </section>
      </section>
    </article>
  );
};

ArticleCard.displayName = "ArticleCard";

export const ArticleGridCards = withGrid(ArticleCard);
