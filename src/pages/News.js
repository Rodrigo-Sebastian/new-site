import Link from "next/link";
import { useEffect, useState } from "react";

const DIN_API_NYCKEL = "pub_38646ff2d815974475c05b2e587f0003b510f";

export async function getPizzaArticles() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=${category}`
  );
  const data = await res.json();

  return data.results;
}

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=sports`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, [setArticles]);

  return (
    <div className="">
      <ul className="list-none m-0">
        {articles.map((article) => (
          <li
            key={article.article_id}
            className="p-4 gap-2 flex flex-col mb-3 border border-slate-100"
          >
            <Link href={`/article/${article.article_id}`}>
              {" "}
              <h2 className="text-[16px]">{article.title}</h2>{" "}
            </Link>
            <img
              src={article.image_url}
              className="h-[200px] w-auto max-w-[200px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
