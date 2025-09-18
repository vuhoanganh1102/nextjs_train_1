"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function useAuth() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const token = window.sessionStorage.getItem("access-token");
    setAccessToken(token);

    if (!token) {
      router.replace("/member/login");
    }
  }, [router]);
  return { accessToken };
}
