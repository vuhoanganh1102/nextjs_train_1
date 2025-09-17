"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export interface Member {
  id: number;
  name: string;
  description: string;
}
async function updsertMember(member: Member): Promise<Member> {
  console.log("ok", member);
  const token = window.localStorage.getItem("access-token");
  const res = await axios.put("http://localhost:3000/member", member, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
const useMutiationWithMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Member) => updsertMember(data),
    onSuccess: async (data) => {
      console.log("Mutation success!", data);

      // invalidate để fetch lại danh sách members (nếu có query)
      // await queryClient.invalidateQueries({ queryKey: ["member", data.id] });

      // hoặc update trực tiếp cache nếu chỉ cần update 1 item
      queryClient.setQueryData(["member", data.id], data);
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update `);
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });
};

export default useMutiationWithMember;
