import { ArticleGridCards } from "@components/ArticleGrid";
import { API } from "@lib/API";
import * as JSONAPI from "jsonapi-typescript";
import { useEffect, useState } from "react";

export const Page = () => {
  const [data, setData] = useState<JSONAPI.CollectionResourceDoc[] | undefined>(
    undefined
  );
  const [numArticles, setNumArticles] = useState<number>(
    localStorage.getItem("numArticles")
      ? parseInt(localStorage.getItem("numArticles") as string)
      : 3
  );

  useEffect(() => {
    const controller = new AbortController();
    const getArticles = async () => {
      if (!data) {
        const result = await API.articles(controller);

        if (result) {
          setData(result.slice(0, numArticles));
        }
      }
    };

    getArticles();

    return () => controller?.abort();
  }, [data, numArticles]);

  const updateNumArticles = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumArticles(parseInt(e.target.value));
    localStorage.setItem("numArticles", e.target.value);
    window.location.reload();
  };

  return (
    <div>
      <form>
        <label className="block" htmlFor="select">Select number of articles to show:</label>
        <select id="select" value={numArticles} onChange={updateNumArticles}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>

      <section className="flex flex-col mt-48 mx-auto bg-zinc-200 p-4 sm:p-16">
        {data ? (
          <ArticleGridCards data={data} articles={data.length} />
        ) : (
          <span className="loading loading-spinner loading-lg mx-auto mt-48"></span>
        )}
        <a className={`btn border-black text-black btn-outline mx-auto mt-16`}>
          See all articles
        </a>
      </section>
    </div>
  );
};
