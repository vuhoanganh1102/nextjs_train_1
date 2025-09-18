"use client";

import { useCallback, useState } from "react";

export default function CreaterMember() {
  //   const loginFunct = useLogin();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useCallback(() => {
    // loginFunct.mutate({
    //   name,
    //   password,
    // });
  }, [name, password]);
  return (
    <>
      <div className="">
        <div className="flex flex-col content-center p-10">
          <input
            className="border-black border-2"
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-black border-2"
            type="password"
            name="passsword"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-amber-300 cursor-pointer"
            onClick={() => handleLogin()}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
