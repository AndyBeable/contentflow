import type { Article, Status } from "../../types/article";
import { Link } from "react-router";

type ArticleCardProps = {
  article: Article;
};

const statusLabels: Record<Status, string> = {
  draft: "Draft",
  published: "Live",
  archived: "Archived",
};

const statusStyles: Record<Status, string> = {
  draft: "bg-amber-100 text-amber-800",
  published: "bg-green-100 text-green-800",
  archived: "bg-slate-100 text-slate-600",
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-4">
      <div className="flex justify-between items-start mb-3">
        <h2 className="font-semibold">{article.title}</h2>
        <p
          className={`inline-flex shrink-0 rounded-full px-3 py-1 ${statusStyles[article.status]}`}
        >
          {statusLabels[article.status]}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-slate-500">{article.author}</p>
        <span>·</span>
        <p className="text-sm text-slate-500">{article.createdAt}</p>
      </div>
      <div>
        <Link
          to={`${article.id}/edit`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
      </div>
    </article>
  );
}
