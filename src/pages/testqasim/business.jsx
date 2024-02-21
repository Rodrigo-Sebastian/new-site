import Layout from "./componenets/Layout";
import News from "./componenets/news";

export default function Business() {
  return (
    <>
      <h1>Chas Business</h1>
      <Layout>
        <News category="business" />
      </Layout>
    </>
  );
}
