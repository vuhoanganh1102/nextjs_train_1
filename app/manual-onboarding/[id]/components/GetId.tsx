"use client";

import useMutiationWithMember, {
  Member,
} from "@/app/react-query/useMutiationWithMember";
import { useCallback, useEffect } from "react";
import { useState } from "react";
export default function GetId({
  id,
  memberDetail,
  isFetching,
}: {
  id: number;
  memberDetail: Member;
  isFetching: boolean;
}) {
  const [name, setName] = useState(memberDetail?.name);
  const [description, setDescription] = useState(memberDetail?.description);
  const mutiation = useMutiationWithMember();

  const clickMe = useCallback(() => {
    mutiation.mutate({
      id: id ? +id : 0,
      name,
      description,
    });
  }, [name, description, mutiation, id]);
  return (
    <div className="pl-60 pr-60">
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="row-span-3 ..."></div>
        <div className="col-span-2 ...">
          <div className="flex justify-center flex-col">
            <div className="items-center">Test done {id}</div>
            <input
              className="border-4 border-indigo-500 rounded-sm back"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="border-4 border-indigo-500 rounded-sm back"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <button
              className="bg-sky-500/100 hover:bg-amber-50"
              onClick={() => clickMe()}
            >
              Click me
            </button>
          </div>
        </div>
        <div className="col-span-2 row-span-2 ...">03</div>
      </div>
    </div>
  );
}
