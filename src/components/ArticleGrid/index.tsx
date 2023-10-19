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

  const SHARED_STYLES = "card card-compact shadow-xl bg-white";
  const ONE_ARTICLE_STYLES = classNames`col-span-4
    sm:col-start-2
    sm:col-span-6
    sm:card-side
    sm:grid
    sm:gap-6
    sm:grid-cols-2
    sm:h-[351px]

    lg:col-start-3
    lg:col-span-8
    
    [&>figure]:sm:col-span-1

    [&>figure>img]:sm:aspect-square
    [&>figure>img]:sm:h-full

    [&>section]:sm:col-span-1
    `;
  const TWO_ARTICLES_STYLES =
    "col-span-4 sm-col-span-3 sm:first:col-start-1 lg:first:col-start-3";
  const ODD_NUM_ARTICLES_STYLES = classNames`
    col-span-4

    lg:first:col-start-1
    lg:col-span-4

    last:sm:max-lg:card-side
    last:sm:col-span-8
    last:lg:col-span-4
    last:sm:max-lg:grid
    last:sm:max-lg:gap-6
    last:sm:max-lg:grid-cols-2

    [&>figure]:last:sm:max-lg:col-span-1
    [&>figure]:lg:col-span-2
    
    [&>figure>img]:sm:max-lg:h-full
    [&>figure>img]:last:sm:max-lg:aspect-square
    
    [&>section]:last:sm:max-lg:col-span-1
    [&>section]:lg:col-span-2
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
          <p>
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
