"use client";

import useAuth from "@/app/hooks/Auth/useAuth";
import Loading from "../loading";

export default function RenderNow() {
  const { accessToken } = useAuth();
  if (!accessToken) return <Loading />;
  return <div> test</div>;
}
