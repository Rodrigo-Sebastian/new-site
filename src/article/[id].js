import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link"


const DIN_API_NYCKEL = "";

export default function Article() {
  const [article, setArticle] = useState(null);

  const router = useRouter(); 
  const { id } = router.query; 

  useEffect(() => { 
    fetch(`https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);
        const allArticles = data.results; 
        const article = allArticles.find((article) => article.article_id == id); //hitta artikeln med artikel_id som överensstämmer med id

        setArticle(article);
      });
  }, [id]);

  /**
   if(article == null){
    return null
   }
   */
  /*
  console.log("Article props", props);
*/
  return (
    <div>
      {article && ( //if article is not null, show:
        <>
        <div className="max-w-full flex flex-col min-h-screen">
            <div className="w-[80%] mx-auto items-center">

          <h2 className="text-[16px]">{article.title}</h2>
          <img src={article.image_url} />
          <Link href={"/"}>Back home</Link>
            </div>
        </div>
        </>
      )}
    </div>
  );
}
