import Layout from "./componenets/Layout";
import News from "./componenets/news";

export default function Sports() {
  return (
    <>
      <h1>Chas Sports</h1>

      <Layout>
        <News category="sports" />
      </Layout>
    </>
  );
}
