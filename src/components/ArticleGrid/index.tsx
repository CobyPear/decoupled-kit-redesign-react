import { Button } from "@components/Button";
import { withGrid } from "@components/Grid/withGrid";
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
  const ONE_ARTICLE_STYLES =
    "col-span-4 sm:col-start-2 sm:col-span-6 sm:card-side lg:col-start-3 lg:col-span-8 lg:grid lg:grid-cols-8 [&>figure]:sm:max-w-1/2 [&>figure]:lg:col-span-4 [&>figure>img]:h-full [&>section]:lg:col-span-4";
  const TWO_ARTICLES_STYLES =
    "col-span-4 sm-col-span-3 sm:first:col-start-1 lg:first:col-start-3";
  const ODD_NUM_ARTICLES_STYLES =
    "col-span-4 sm:col-span-3 sm:first:col-start-2 lg:first:col-start-1 lg:col-span-4 last:sm:card-side last:sm:col-span-6 last:sm:col-start-2 last:lg:card last:lg:col-span-4 last:sm:max-lg:grid last:sm:max-lg:grid-cols-4 [&>section]:last:sm:max-lg:col-span-2 [&>figure]:last:sm:max-lg:col-span-2 [&>figure]:lg:col-span-2 [&>figure>img]:h-full [&>section]:lg:col-span-2";

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
