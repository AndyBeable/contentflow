export type Status = "draft" | "published" | "archived";

export type Article = {
  id: string;
  title: string;
  slug: string;
  status: Status;
  author: string;
  createdAt: string;
};
