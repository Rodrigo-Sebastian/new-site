import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../componenets/Layout";

const API_NYCKEL = "";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log("Article ID:", id);
    fetch(`https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=pizza`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data.results;
        console.log("allArticles in id:", allArticles);

        const article = allArticles.find((article) => article.article_id == id);
        console.log("article id id", article);
        setArticle(article);
        const remainingArticles = allArticles.filter(
          (a) => a.article_id !== article.article_id
        );
        setOtherArticles(remainingArticles);
      });
  }, [id]);

  return (
    <Layout>
      <div className="flex mt-4">
        <div className="w-2/3 pr-4">
          {article && (
            <div
              className="bg-white
              p-4
              rounded-md
              shadow-xl
              max-w-full"
            >
              <h2>{article.title}</h2>
              <img src={article.image_url} alt="" />
            </div>
          )}
        </div>
        <div>
          <h3>Other News</h3>
          <ul className="grid grid-cols-1 gap-4">
            {(otherArticles || []).map((art) => (
              <div
                key={art.article_id}
                className="bg-white
              p-4
              rounded-md
              shadow-xl
              max-w-full 
              "
              >
                <Link href={`/article/${art.article_id}`}>{art.title}</Link>
                <img src={art.image_url} alt="" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
