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
          setData(result.slice(0, 3));
        }
      }
    };

    getArticles();

    return () => controller?.abort();
  }, [data]);

  const Fallback = () => {
    return <h2>fallback component</h2>;
  };

  return (
    <section className="mt-48 mx-auto bg-zinc-200 p-16">
      {data ? (
        <ArticleGridCards
          data={data}
          articles={data.length}
          FallbackComponent={Fallback}
        />
      ) : null}
      <a className={`btn border-black text-black btn-outline`}>
        See all articles
      </a>
    </section>
  );
};
