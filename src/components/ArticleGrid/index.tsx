import { Button } from "@components/Button";
import { withGrid } from "@components/GridHOC/withGrid";
import { classNames } from "@lib/cssTemplate";
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

  const SHARED_STYLES = "card shadow-xl bg-white";
  const ONE_ARTICLE_STYLES = classNames`col-span-4
    sm:col-span-6
    sm:col-start-2

    sm:card-side
    sm:grid
    sm:grid-gap-6
    sm:grid-cols-2
    sm:grid-flow-col

    lg:col-start-4
    lg:col-span-6

    2xl:col-start-6

    
    [&>figure]:sm:col-span-1
    [&>figure>img]:sm:aspect-square
    [&>figure>img]:sm:h-full

    [&>section]:sm:col-span-1
    `;
  const TWO_ARTICLES_STYLES =
    "col-span-4 lg:first:col-start-3 2xl:first:col-start-5";
  const ODD_NUM_ARTICLES_STYLES = classNames`
    col-span-4
    md:max-lg:col-span-3

    first:md:col-start-2
    first:lg:col-start-3
    
    last:sm:max-md:col-span-8
    last:md:max-lg:col-span-6
    last:lg:max-2xl:col-span-8
    
    last:md:max-lg:col-start-2
    last:lg:max-2xl:col-start-3
    
    last:sm:max-2xl:card-side
    
    last:sm:max-2xl:grid
    last:sm:max-2xl:gap-6
    last:sm:max-2xl:grid-cols-2
    
    [&>figure]:last:sm:max-2xl:col-span-1

    [&>figure>img]:sm:max-2xl:h-full
    [&>figure>img]:last:sm:max-2xl:aspect-square

    [&>section]:last:sm:max-2xl:col-span-1
    [&>section]:last:sm:max-2xl:py-24
    `;

  return (
    <article
      className={clsx(
        SHARED_STYLES,
        oneArticle && ONE_ARTICLE_STYLES,
        twoArticles && TWO_ARTICLES_STYLES,
        oddArticles && ODD_NUM_ARTICLES_STYLES
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
        <section className="card-actions flex-col flex-grow">
          <p className="break-words">
            {content.body.summary
              ? content.body.summary
              : ""}
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
