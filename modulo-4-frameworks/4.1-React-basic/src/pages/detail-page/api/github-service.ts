import { MemberDetailEntity } from "../detail.model";

const API = `https://api.github.com/users`;

export const gitHubService = async(id: string): Promise<MemberDetailEntity> => {
    const response = await fetch(`${API}/${id}`);
    const data = await response.json();
    return data;
}