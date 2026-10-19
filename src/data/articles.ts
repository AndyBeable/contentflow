import type { Article } from "../types/article";

export const articles: Article[] = [
  {
    id: "001",
    title: "Article One",
    slug: "article-one",
    status: "draft",
    author: "Andy Beable",
    body: "This article explores the latest developments in digital content management and how modern platforms are helping teams create, organise and publish content more efficiently. We'll look at some of the key challenges and opportunities facing content teams today.",
    createdAt: "2026-10-08",
  },
  {
    id: "002",
    title: "Article Two",
    slug: "article-two",
    status: "published",
    author: "James Bond",
    body: "Building great digital experiences requires a combination of thoughtful design, reliable technology and effective collaboration. In this article, we share practical insights into improving development workflows and delivering better experiences for users.",
    createdAt: "2026-05-03",
  },
  {
    id: "003",
    title: "Article Three",
    slug: "article-three",
    status: "archived",
    author: "Andy Beable",
    body: "As organisations continue to evolve their digital strategies, having the right tools and processes in place is more important than ever. We explore how teams can streamline content operations, maintain consistency and adapt to changing business requirements.",
    createdAt: "2026-10-08",
  },
];
