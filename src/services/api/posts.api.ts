import { Posts } from "../../entities/Posts";
import { api } from "../../config/http";
import { Endpoints } from "../../config/endpoint";

export const fetchPosts = async () => {
  const res = await api.get<Posts[]>(Endpoints.Posts);
  return res.data;
}
