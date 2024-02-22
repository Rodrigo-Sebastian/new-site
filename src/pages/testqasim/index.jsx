import Layout from "./componenets/Layout";
import News from "./componenets/news";

export default function Home() {
  return (
    <>
      <h1 className="bg-gray-600 p-4 text-gray-200 mb-0">Chas News</h1>
      <Layout>
        <News category="pizza" />
      </Layout>
    </>
  );
}
