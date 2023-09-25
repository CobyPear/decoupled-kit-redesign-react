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
  };
  articles: number;
}

const ArticleCard = ({ content, articles }: ArticleCardProps) => {
  const oneArticle = articles === 1;
  const oddArticles = articles % 2 === 1;

  const lastLgMaxXl = createSelector("last:lg:max-xl");
  const lastImage = createSelector("[&>figure>img]", "last", "lg:max-xl");
  console.log(lastImage("hi"), lastLgMaxXl("test"));
  // console.log("lastLgMaxXl", lastLgMaxXl("card-side", "col-span-2"));
  // console.log(lastImage("aspect-square"));
  return (
    <article
      className={clsx(
        "card card-compact shadow-xl bg-white",
        "min-w-md max-w-md",
        oneArticle && "lg:max-xl:card-side lg:col-span-2",
        oddArticles &&
          "last:lg:max-xl:card-side last:lg:max-xl:col-span-2 last:lg:max-xl:min-w-fit last:lg:max-xl:max-w-screen-md max-h-[480px] [&>figure>img]:last:lg:max-xl:aspect-square [&>figure>img]:last:lg:max-xl:max-w-lg",
        // OR:
        oddArticles && [
          lastLgMaxXl(
            "card-side",
            "col-span-2",
            "min-w-fit",
            "max-w-screen-md",
            "max-h-[480px]",
            "text-start"
          ),
          lastImage("aspect-square", "max-w-lg"),
          // OR:
          // lastLgMaxXl("col-span-2"),
          // lastLgMaxXl("min-w-fit"),
          // etc...
          // lastImage("aspect-square"),
          // etc...
        ]
      )}
    >
      <figure className="">
        <img
          className="aspect-auto"
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
        <section className="card-actions h-full">
          <p className="my-4">
            {content.body.summary
              ? content.body.summary
              : content.field_media_image.field_media_image.resourceIdObjMeta
                  .alt}
          </p>
          <a className="btn btn-sm ml-auto mt-auto w-24 h-10 font-light text-white capitalize">
            View
          </a>
        </section>
      </section>
    </article>
  );
};

ArticleCard.displayName = "ArticleCard";

export const ArticleGridCards = withGrid(ArticleCard);
