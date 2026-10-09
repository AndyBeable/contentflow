import type { Article, Status } from "../types/article";

type ArticleCardProps = {
  article: Article;
};

const statusLabels: Record<Status, string> = {
  draft: "Draft",
  published: "Live",
  archived: "Archived",
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{statusLabels[article.status]}</p>
      <p>{article.createdAt}</p>
    </article>
  );
}
