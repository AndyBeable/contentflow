import type { Article } from "../types/article";

export const articles: Article[] = [
  {
    id: "001",
    title: "Article One",
    slug: "article-one",
    status: "draft",
    author: "Andy Beable",
    createdAt: "2026-10-08",
  },
  {
    id: "002",
    title: "Article Two",
    slug: "article-two",
    status: "published",
    author: "James Bond",
    createdAt: "2026-05-03",
  },
  {
    id: "003",
    title: "Article Three",
    slug: "article-three",
    status: "archived",
    author: "Andy Beable",
    createdAt: "2026-10-08",
  },
];
