import Aside from "@/components/Aside";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row ">
        <main className="sm:w-[70%] px-2 sm:pl-6 sm:pr-3 py-4">
          <h1>News WebSite</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            asperiores ut tenetur numquam repellat. Odio, maxime! Doloremque
            quam quia possimus?
          </p>
        </main>
        <div className="sm:w-[30%] px-2 sm:pr-6 sm:pl-3 hidden sm:flex">
          <Aside />
        </div>
      </div>
    </>
  );
}
