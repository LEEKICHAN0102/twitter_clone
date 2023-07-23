import Link from "next/link";
import { User } from "@prisma/client";

interface TweetContentProps {
  content: string;
  id:Number;
}


export default function TweetContent({
  content,
  id
}: TweetContentProps) {
  return (
    <Link href={`/tweet/${id}`}>
      <div  className="w-1/2 h-32 border-2  border-black shadow-xl shadow-blue-300 rounded-2xl mt-12 bg-white flex flex-col p-4 ">
        <span className="font-bold text-2xl">{`익명${id}`}</span>
        <span className="mt-4">{content}</span>
      </div>
    </Link>
  );
}