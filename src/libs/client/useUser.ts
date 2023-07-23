import { useRouter } from "next/router";
import useSWR from "swr"


export default function useUser(){
  const { data, error } = useSWR("/api/users/me");
  const router=useRouter();
  if (data && data.ok) {
    router.replace("/");
  } else if (data && !data.ok) {
    router.replace("/log-in");
  }
  return { user: data?.profile, isLoading: !data && !error };
}