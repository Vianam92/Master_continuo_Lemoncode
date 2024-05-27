import { MemberEntity } from "./list.model";

const url = "https://api.github.com";

export const getListOrg = async (value: string): Promise<MemberEntity[]> => {
  const response = await fetch(`${url}/orgs/${value}/members`);
  const data = response.json();
  return data;
};
