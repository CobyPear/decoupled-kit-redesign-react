import { withGrid } from "@utils/Grid";
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
  // console.log(content, articles);
  console.log(articles % 2);
  return (
    <article
      className={clsx(
        "card card-compact shadow-xl bg-white",
        articles === 1 && "lg:col-span-2 xl:col-span-3"
        // articles % 2 === 0
        //   ? "lg:last:even:col-span-1 xl:last:even:col-span-2"
        //   : "lg:last:odd:col-span-2 xl:last:odd:col-span-3",
        // articles % 3 === 0
        //   ? "lg:last:odd:col-span-2 xl:last:odd:col-span-1  xl:last:even:col-span-2"
        //   : "xl:last:even:col-span-3"
        // "lg:last:odd:col-span-2 xl:even:last:col-span-4 xl:odd:last:col-span-1"
      )}
    >
      <figure className="bg-blue-100">
        <img
          className="aspect-auto rounded-t-lg lg:w-fit"
          width={385}
          height={217}
          alt={
            content.field_media_image.field_media_image.resourceIdObjMeta.alt
          }
          src={
            import.meta.env.VITE_BACKEND_URL +
            content.field_media_image.field_media_image.uri.url
          }
        />
      </figure>
      <section className="card-body">
        <h2 className="text-black card-title align-center">{content.title}</h2>
        <section className="card-actions mt-auto block xs:flex justify-end">
          {content.body.summary ? (
            <p>{content.body.summary}</p>
          ) : (
            <p>
              {
                content.field_media_image.field_media_image.resourceIdObjMeta
                  .alt
              }
            </p>
          )}
          <a
            className={clsx(
              "btn btn-xs xs:btn-sm sm:btn-md md:btn-lg",
              "sm:ml-auto p-4"
            )}
          >
            View
          </a>
        </section>
      </section>
    </article>
  );
};

ArticleCard.displayName = "ArticleCard";

export const ArticleGridCards = withGrid(ArticleCard);
