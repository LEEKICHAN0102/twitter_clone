import Layout from "@/components/layout";
import Link from "next/link";
import {useForm} from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

interface AccountFormData {
  name : string;
  email: string;
  password: string;
  password2:string;
}

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }=useForm<AccountFormData>({
    mode: "onChange",
  });
  const [createAccount,setCreateAccount]=useState(false);
  const [formData,setFormData]=useState<AccountFormData|undefined>(undefined);
  const onAccountValid=(data:AccountFormData)=>{
    setCreateAccount(true);
    setFormData(data);
  }
  const router = useRouter();
  return (
    <Layout title="Twitter-Log In">
      <main className="bg-blue-400 flex flex-col w-screen h-screen items-center">
        <title>
          twitter 계정 생성
        </title>
        <header className="pt-12 font-bold text-3xl text-white">계정 생성</header>
        <form onSubmit={handleSubmit(onAccountValid)} className="mt-36 flex flex-col space-y-6 w-80">
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
          <input className="bg-black text-white rounded-full p-2 focus:border-2 focus:border-yellow-500" type="submit" value="Create Account"/>
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