import type { PostBySlugQuery, PostsQuery } from "../../generated/graphql";

export interface Post {
  fields: {
    title: string
    about: string
    slug: string
  }
}

export interface PostRepositoryInterFace {
  get(): Promise<PostsQuery>
  find(slug: string): Promise<PostBySlugQuery>
}