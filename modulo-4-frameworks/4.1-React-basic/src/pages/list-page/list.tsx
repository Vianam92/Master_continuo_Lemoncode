import React from "react";
import { Link } from "react-router-dom";
import { FilterComponent } from "./components/filter";
import { MemberEntity, getListOrg } from "./api";
import { routes } from "@/core";
import { DialogTitle } from "@mui/material";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [value, setValue] = React.useState<string>("lemoncode");

  React.useEffect(() => {
    getListOrg(value).then((data) => setMembers(data));
  }, []);

  const handlerGetValue = (value: string) => {
    setValue(value);
  };

  const handlerClick = async () => {
    const data = await getListOrg(value);
    setMembers(data);
  };

  return (
    <>
      <DialogTitle>Hello from List page</DialogTitle>
      <FilterComponent
        handlerGetValue={handlerGetValue}
        value={value}
        handlerClick={handlerClick}
      />
      <section className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.details(member.login)}>{member.login}</Link>
          </>
        ))}
      </section>
    </>
  );
};
