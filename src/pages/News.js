import Link from "next/link";
import { useEffect, useState } from "react";
const DIN_API_NYCKEL = "";
export default function News() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`)
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li>
            <Link href={`/article/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
