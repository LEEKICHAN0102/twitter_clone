import Layout from "@/components/layout";
import Link from "next/link";

const Tweet = () => {
  return (
    <Layout title="twitter-tweet">
      <main className="bg-blue-400 flex flex-col w-screen h-screen items-center">
        <title>
          twitter-트윗
        </title>
        <div className="pt-12 font-bold text-white text-2xl">
          Twitter-tweet
        </div>
        <div className="bg-white w-1/2 h-1/2 rounded-2xl mt-24 flex flex-col p-12">
          <span className="font-bold text-2xl">name</span>
          <span className="mt-4">트위터를 어떻게 쓰나요?</span>
          <div className="flex flex-col flex-grow justify-end">
            <div className="flex justify-around space-x-8">
              <button className="bg-blue-400 border-2 border-gray-700 rounded-xl w-screen p-2 text-white">Tweet</button>
              <button className="bg-blue-400 border-2 border-gray-700 rounded-xl w-screen p-2 text-white">😍</button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Tweet;