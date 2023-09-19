import { btn } from "@lib/styleHelpers";
import { withGrid } from "@utils/Grid";
import clsx from "clsx";

const ArticleCard = ({
  content,
}: {
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
}) => {
  return (
    <article className="card card-compact shadow-xl bg-white last:col-span-2">
      <figure className="bg-blue-100">
        <img
          className="aspect-auto rounded-t-lg lg:w-fit object-right"
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
        <section className="card-actions mt-auto justify-end">
          {content.body.summary ? (
            <p>{content.body.summary}</p>
          ) : (
            <p>
              {content.field_media_image.field_media_image.resourceIdObjMeta.alt}
            </p>
          )}
          <a className={clsx(btn, "ml-auto w-32")}>View</a>
        </section>
      </section>
    </article>
  );
};

ArticleCard.displayName = "ArticleCard";

export const ArticleGridCards = withGrid(ArticleCard);
