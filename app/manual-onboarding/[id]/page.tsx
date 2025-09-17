import { Member } from "@/app/react-query/useMutiationWithMember";
import GetId from "./components/GetId";
import { use } from "react";
import axios from "axios";
async function getMember(id: number): Promise<Member> {
  const res = await axios.get(`http://localhost:3000/member/${id}`);
  return res.data;
}
export default async function manualOnboardingDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // const memberDetail = useQueryWithMember(+id);
  const memberDetail = await getMember(+id);

  if (memberDetail)
    return (
      <GetId id={+id} memberDetail={memberDetail} isFetching={false} />
      // <div>{memberDetail.name}</div>
    );
  else return <div>loading...</div>;
}
