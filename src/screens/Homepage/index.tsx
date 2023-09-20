import { ArticleGridCards } from "@components/ArticleGrid";
import { API } from "@lib/API";
import * as JSONAPI from "jsonapi-typescript";
import { useEffect, useState } from "react";

export const Page = () => {
  const [data, setData] = useState<JSONAPI.CollectionResourceDoc[] | undefined>(
    undefined
  );

  useEffect(() => {
    const controller = new AbortController();
    const getArticles = async () => {
      if (!data) {
        const result = await API.articles(controller);

        if (result) {
          setData(result);
        }
      }
    };

    getArticles();

    return () => controller?.abort();
  }, [data]);

  return (
    <section className="mt-48 mx-auto max-w-fit  sm:w-9/12 md:w-10/12 lg:max-w-full bg-slate-700 p-4">
      {data ? <ArticleGridCards data={data.slice(0, 3)} /> : null}
    </section>
  );
};
