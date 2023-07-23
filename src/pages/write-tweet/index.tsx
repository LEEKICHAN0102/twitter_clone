import Layout from "@/components/layout";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";

interface TweetFormData {
  content: string;
}


const Write = () => {
  return (
    <Layout title="write-tweet">
      <main className="bg-blue-400 flex flex-col w-screen h-screen items-center">
        <title>
          twitter-write
        </title>
        <div className="pt-12 font-bold text-white text-2xl">
          Twitter-write
        </div>
        <div className="bg-white w-1/2 h-1/2 rounded-2xl mt-24 flex flex-col p-12">
          <span className="mb-2 font-bold text-sm">Name</span>
          <textarea className="h-screen rounded-lg border-2 border-blue-400 p-4 mb-4 resize-none" placeholder="트윗을 작성 해보세요"></textarea>
          <div className="flex flex-col">
            <div className="flex">
              <button className="bg-blue-400 border-2 border-gray-700 rounded-xl w-screen p-2 text-white">작성 하기</button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Write;