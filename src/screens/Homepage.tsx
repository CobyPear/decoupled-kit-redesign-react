import { useEffect, useState } from "react";
import { API } from "@lib/API";
import { ArticleGridCards } from "@components/ArticleGrid";
import * as JSONAPI from "jsonapi-typescript";

export const Page = () => {
  const [data, setData] = useState<JSONAPI.CollectionResourceDoc[] | undefined>(
    undefined
  );

  useEffect(() => {
    const controller = new AbortController();
    const getArticles = async () => {
      if (!data) {
        const result = await API.articles(controller);
        console.log(result);
        if (result) {
          setData(result);
        }
      }
    };

    getArticles();

    return () => controller?.abort();
  }, [data]);

  return (
    <>
      <h2>Articles Grid</h2>
      {data ? <ArticleGridCards cols={4} data={data} /> : null}
    </>
  );
};
