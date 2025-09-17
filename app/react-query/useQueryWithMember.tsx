"use client";

import { useQuery } from "@tanstack/react-query";
import { Member } from "./useMutiationWithMember";
import axios from "axios";

export async function getMember(id: number): Promise<Member> {
  const res = await axios.get(`http://localhost:3000/member/${id}`);
  return res.data;
}
const useQueryWithMember = (id: number) => {
  return useQuery({
    queryKey: ["member", id ? id : ""],
    queryFn: () => getMember(id),
    enabled: !!id,
  });
};

export default useQueryWithMember;
