import Aside from "@/components/Aside";
import Layout from "@/components/Layout";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row ">
        <main className="sm:w-[70%] px-2 sm:pl-6 sm:pr-3 py-4">
        <h1 className="bg-gray-600 p-4 text-gray-200 mb-0">Chas News</h1>
          <Layout>
            <News category="pizza" />
          </Layout>
        </main>
        <div className="sm:w-[30%] px-2 sm:pr-6 sm:pl-3 hidden sm:flex">
          <Aside />
        </div>
      </div>
    </>
  );
}
