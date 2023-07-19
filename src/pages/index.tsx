import Layout from "@/components/layout";
import useUser from "@/libs/client/useUser";
import Link from "next/link";



const Home = () => {
  const { user, isLoading } = useUser();
  
  return (
    <Layout title="twitter-home">
      <main className="bg-blue-400 flex flex-col w-screen h-screen">
        <title>
          twitter-홈
        </title>
        <Link href="/">
          <div className="p-8  text-white flex">
                <svg
                  className="w-20 h-20"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <h1 className="font-bold text-xl ml-4 flex items-center">Twitter-clone</h1>
              </div>
        </Link>
        <div className="flex flex-col items-center">
            <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-2xl mt-12 bg-white flex flex-col p-4 ">
              <span className="font-bold text-2xl">name</span>
              <span className="mt-4">트위터를 어떻게 쓰나요?</span>
            </div>
            <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-2xl mt-12 bg-white flex flex-col p-4 ">
              <span className="font-bold text-2xl">name</span>
              <span className="mt-4">트위터를 어떻게 쓰나요?</span>
            </div>
            <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-2xl mt-12 bg-white flex flex-col p-4 ">
              <span className="font-bold text-2xl">name</span>
              <span className="mt-4">트위터를 어떻게 쓰나요?</span>
            </div>
            <Link href="/write-tweet">
              <div className="bg-white rounded-full border-2 border-gray-500 p-4 fixed bottom-12 right-12">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                </svg>
              </div>
            </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Home;