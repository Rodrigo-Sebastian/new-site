//import { useRouter } from "next/router";
//import { useEffect, useState } from "react";
import Link from "next/link";

const DIN_API_NYCKEL = "";

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
        <Link href="/News">
          <p>Back home</p>
        </Link>
      </div>
    </div>
  );
}


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