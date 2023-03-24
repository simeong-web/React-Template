import createApiThunk from "../../../utilities/createApiThunk";
import { Posts } from "../../../entities/Posts";
import { fetchPosts } from "../../api/posts.api";
import { Endpoints } from "../../../config/endpoint";

const initialState = [] as Posts[];

export const postsThunk = createApiThunk("posts", Endpoints.Posts, fetchPosts, initialState);