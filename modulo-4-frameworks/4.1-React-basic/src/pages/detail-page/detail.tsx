import { DetailComponentGeneral, routes } from "@/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity, createDefaultMemberDetail } from "./detail.model";
import { gitHubService } from "./api/github-service";

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    gitHubService(id).then((data) => setMember(data));
  }, []);

  return (
    <DetailComponentGeneral>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={routes.list}>Back to list page</Link>
    </DetailComponentGeneral>
  );
};
