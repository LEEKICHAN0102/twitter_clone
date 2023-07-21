import Layout from "@/components/layout";
import Link from "next/link";
import {useForm} from "react-hook-form";
import { useState } from "react";
import useMutation from "@/libs/client/useMutation";
import Loading from "@/components/loading";
import { useRouter } from "next/router";

interface AccountFormData {
  name : string;
  email: string;
  password: string;
}

interface MutationResult {
  ok: boolean;
}

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }=useForm<AccountFormData>({
    mode: "onChange",
  });
  const [create, { loading, data, error }] =
  useMutation<MutationResult>("/api/users/create");
  const router=useRouter();
  const onAccountValid=(validForm:AccountFormData)=>{
    create(validForm);
    router.push("/log-in");
  }

  
  return (
    <Layout title="Twitter-Log In">
      <main className="bg-blue-400 flex flex-col w-screen h-screen items-center">
        <title>
          twitter 계정 생성
        </title>
        <header className="pt-12 font-bold text-3xl text-white">계정 생성</header>
        <div className="text-white mt-12">
          <svg
            className="w-20 h-20"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onAccountValid)} className="mt-12 flex flex-col space-y-6 w-80">
          <input className={errors.name ? "focus:border-4 focus:border-red-400 rounded-full p-2":"focus:border-4 focus:border-green-400 rounded-full p-2"} 
            {...register("name",{
            required:"생성 할 닉네임을 입력해주세요",
          })} type="text" placeholder="NickName" />
          <div className="ml-4 text-red-400 font-bold">
            {errors.name?.message}
          </div>
          <input {...register("email",{
            required:"생성 할 E-mail을 입력해주세요",
          })} className={errors.email ? "focus:border-4 focus:border-red-400 rounded-full p-2":"focus:border-4 focus:border-green-400 rounded-full p-2"} placeholder="E-mail" type="email"/>
          <div className="ml-4 text-red-400 font-bold">
            {errors.email?.message}
          </div>
          <input {...register("password",{
            required:"생성 할 비밀번호를 입력해주세요",
          })} className={errors.password? "focus:border-4 focus:border-red-400 rounded-full p-2" :"focus:border-4 focus:border-green-400 rounded-full p-2"} placeholder="password" type="password"/>
          <div className="ml-4 text-red-400 font-bold">
            {errors.password?.message}
          </div>
          {loading ? (
            <div className="bg-black cursor-pointer rounded-full p-2 pl-36">
              <Loading />
            </div>
          ) : (
          <input className="bg-black text-white rounded-full p-2 focus:border-2 focus:border-yellow-500" type="submit" value="Create Account"/>
        )}
        </form>
        <span className="text-white font-bold mt-4">
          로그인 하시겠어요? &rarr; 
            <Link  className="ml-4 text-yellow-300" href="/log-in">
              로그인 하기
            </Link>
        </span>
      </main>
    </Layout>
  );
};

export default CreateAccount;