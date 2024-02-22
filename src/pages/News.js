// News.js
import Link from "next/link";
import { useEffect, useState } from "react";

const DIN_API_NYCKEL = process.env.NEXT_PUBLIC_API_KEY;

export async function getNewsByCategory(category) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=${category}`
  );
  const data = await res.json();
  return data.results;
}

export default function News({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNewsByCategory(category)
      .then((data) => setArticles(data))
      .catch((error) => {
        console.error("Error fetching news:", error);
        setArticles([]); // Set articles to an empty array in case of error
      });
  }, [category]);

  return (
    <div className="p-4 w-fit">
      <ul className="list-none m-0 flex flex-wrap gap-4 items-center justify-center max-w-fit">
        {Array.isArray(articles) &&
          articles.map((article) => (
            <li
              key={article.article_id}
              className="p-4 gap-2 flex flex-col flex-wrap items-center mb-3 border border-solid rounded-md max-w-[300px] h-[300px] shadow-lg shadow-blue-500/50 border-slate-100"
            >
              <Link href={`/article/${article.article_id}`}>
                  <h2 className="text-[16px]">{article.title}</h2>
              </Link>
              <img
                src={article.image_url}
                className=""
              />
            </li>
          ))}
      </ul>
    </div>
  );
}


/*
import Link from "next/link";
import { useEffect, useState } from "react";

const DIN_API_NYCKEL = "";

export async function getNewsByCategory(category) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=${category}`
  );
  const data = await res.json();
  return data.results;
}

export default function News({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNewsByCategory(category).then((data) => setArticles(data));
  }, [category]);

  return (
    <div>
      <ul className="list-none m-0">
        {articles.map((article) => (
          <li
            key={article.article_id}
            className="p-4 gap-2 flex flex-col mb-3 border border-slate-100"
          >
            <Link href={`/article/${article.article_id}`}>
              <a>
                <h2 className="text-[16px]">{article.title}</h2>
              </a>
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
*/

/*IF the code inst working please un-comment this line
const DIN_API_NYCKEL = "";

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
    <div>
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
*/