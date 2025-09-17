"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  name: string;
  password: string;
  functFn: () => void;
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
      window.localStorage.setItem("access-token", data.accessToken);
      window.localStorage.setItem("access-token", data.refreshToken);
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
