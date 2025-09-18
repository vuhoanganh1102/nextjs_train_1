"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { routes } from "../routes";

interface Props {
  name: string;
  password: string;
}

async function loginApi(
  member: Props
): Promise<{ accessToken: string; refreshToken: string }> {
  const res = await axios.post("http://localhost:3000/member/login", member, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}
function useLogin() {
  return useMutation({
    mutationFn: (data: Props) => loginApi(data),
    onSuccess: async (data) => {
      console.log("Mutation success!", data);
      window.sessionStorage.setItem("access-token", data.accessToken);
      window.localStorage.setItem("refresh-token", data.refreshToken);
      return <Link href={routes.Member.ManualOnboarding} />;
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update `);
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });
}

export default useLogin;
