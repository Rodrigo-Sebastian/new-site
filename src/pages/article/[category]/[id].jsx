import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const API_NYCKEL = "pub_3821772cf23413ebd45516be40a42648a3bac";

export default function Article() {
  const [article, setArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  const router = useRouter();
  const { id, category } = router.query;

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=${category}`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data.results;
        const article = allArticles.find((article) => article.article_id == id);
        setArticle(article);
        const remainingArticles = allArticles.filter(
          (a) => a.article_id !== article.article_id
        );
        setOtherArticles(remainingArticles);
      });
  }, [id]);

  return (
    <Layout>
      <div className="flex">
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
              <p>{article.description}</p>

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
                <Link href={`/article/${category}/${article.article_id}`}>
                  {art.title}
                </Link>
                <img src={art.image_url} alt="" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}


/*
export async function getStaticPaths() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=sports`
  );
  const data = await res.json();

  const articles = data.results;

  const paths = articles.map((article) => ({
    params: { id: article.article_id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=sports`
  );
  const data = await res.json();

  const articles = data.results;

  const article = articles.find((article) => article.article_id == params.id);

  return {
    props: {
      article,
    },
  };
}

export default function Article({ article }) {
  const router = useRouter();
  const { category } = router.query;
  if (!article) {
    return (
      <>
        <div>Can't find page</div>
        <Link href="/News" className="bottom-0">
          <p>Back home</p>
        </Link>
      </>
    );
  }

  return (
    <div className="w-full flex flex-col h-auto py-6">
      <div className="ml-6">
        <h2 className="text-xl">{article.title}</h2>
        <img src={article.image_url} alt={article.title} />
        <Link href={category ? `/${category.toLowerCase()}` : "/"}>
          <p>Back to {category}</p>
        </Link>
      </div>
    </div>
  );
}
*/
/*Main kod
  return (
    <div className="w-full flex flex-col h-auto py-6">
      <div className="ml-6">
        <h2 className="text-xl">{article.title}</h2>
        <img src={article.image_url} alt={article.title} />
        <Link href="/News">
          <p>Back home</p>
        </Link>
      </div>
    </div>
  );
}
*/

/*
export default function Article() {
  const [article, setArticle] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        const allArticles = data.results;
        const article = allArticles.find((article) => article.article_id == id); //hitta artikeln med artikel_id som överensstämmer med id

        setArticle(article);
      });
  }, [id, setArticle]);
*/
/**
   if(article == null){
    return null
   }
   */
/*
  console.log("Article props", props);
*/
/*
  return (
    <div>
      {article && ( //if article is not null, show:
        <>
          <div className="max-w-full flex flex-col min-h-screen">
            <div className="w-[80%] mx-auto items-center">
              <h2 className="text-[16px]">{article.title}</h2>
              <img src={article.image_url} />
              <Link href={"/news1"}>Back home</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
*/
