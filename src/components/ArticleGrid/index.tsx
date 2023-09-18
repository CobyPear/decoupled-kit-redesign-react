import { withGrid } from "@utils/Grid/withGrid";

const ArticleCard = ({
  content,
}: {
  content: {
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
  console.log(content.field_media_image.field_media_image.uri);
  return (
    <div>
      <h2>{content.title}</h2>
      <img
        alt={content.field_media_image.field_media_image.resourceIdObjMeta.alt}
        src={
          import.meta.env.VITE_BACKEND_URL +
          content.field_media_image.field_media_image.uri.url
        }
      />
    </div>
  );
};

export const ArticleGridCards = withGrid(ArticleCard);
