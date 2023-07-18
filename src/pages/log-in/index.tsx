import Layout from "@/components/layout";
import Link from "next/link";
import {useForm} from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }=useForm<LoginFormData>({
    mode: "onChange",
  });
  const [loggedIn,setLoggedIn]=useState(false);
  const [formData,setFormData]=useState<LoginFormData|undefined>(undefined);
  const onValid=(data:LoginFormData)=>{
    setLoggedIn(true);
    setFormData(data);
  }
  const router = useRouter();
  return (
    <Layout title="Twitter-Log In">
      <main className="bg-blue-400 flex flex-col w-screen h-screen items-center">
        <title>
          twitter 로그인
        </title>
        <header className="pt-12 font-bold text-3xl text-white">로그인</header>
        <form onSubmit={handleSubmit(onValid)} className="mt-36 flex flex-col space-y-6 w-80">
          <input {...register("email",{
            required:"E-mail을 입력해주세요",
          })} className={errors.email ? "focus:border-4 focus:border-red-400 rounded-full p-2":"focus:border-4 focus:border-green-400 rounded-full p-2"} placeholder="E-mail" type="email"/>
          <div className="ml-4 text-red-400 font-bold">
            {errors.email?.message}
          </div>
          <input {...register("password",{
            required:"비밀번호를 입력해주세요",
          })} className={errors.password? "focus:border-4 focus:border-red-400 rounded-full p-2" :"focus:border-4 focus:border-green-400 rounded-full p-2"} placeholder="password" type="password"/>
          <div className="ml-4 text-red-400 font-bold">
            {errors.password?.message}
          </div>
          <input className="bg-black text-white rounded-full p-2 focus:border-2 focus:border-yellow-500" type="submit" value="Log In"/>
        </form>
        <span className="text-white font-bold mt-4">
          계정이 없으신가요? &rarr; 
            <Link  className="ml-4 text-yellow-300" href="/create-account">
              계정 생성하기
            </Link>
        </span>
      </main>
    </Layout>
  );
};

export default Login;