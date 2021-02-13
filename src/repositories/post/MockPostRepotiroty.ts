import { createDummyPosts, createDummyPost, createDummyPostBySlugQuery } from "../../utils/createDummyPosts";
import type { PostRepositoryInterFace } from "./types";

export class MockPostRepository implements PostRepositoryInterFace {
  get() {
    return Promise.resolve(createDummyPosts(15))
  }
  find(slug: string) {
    return Promise.resolve(createDummyPostBySlugQuery(slug))
  }
}