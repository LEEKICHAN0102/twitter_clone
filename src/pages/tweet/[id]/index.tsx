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
          Twitter-Home
        </div>
        <Link href="/tweet/id">
          <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-full mt-12 bg-white flex flex-col">
            <span className="ml-12 font-bold text-2xl">name</span>
            <span className="ml-12 mt-4">트위터를 어떻게 쓰나요?</span>
          </div>
        </Link>
        <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-full mt-12 bg-white flex flex-col">
          <span className="ml-12 font-bold text-2xl">name</span>
          <span className="ml-12 mt-4">트위터를 어떻게 쓰나요?</span>
        </div>
        <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-full mt-12 bg-white flex flex-col">
          <span className="ml-12 font-bold text-2xl">name</span>
          <span className="ml-12 mt-4">트위터를 어떻게 쓰나요?</span>
        </div>
      </main>
    </Layout>
  );
};

export default Tweet;