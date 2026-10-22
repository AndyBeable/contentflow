import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import type { ArticlesContextType } from "../../components/ArticlesLayout/ArticlesLayout";
import type { StatusFilter } from "../../types/articleFilters";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticleSearch from "../../components/ArticleSearch/ArticleSearch";
import StatusFilters from "../../components/StatusFilters/StatusFilters";
import { Plus, Trash } from "lucide-react";

export default function ArticlesPage() {
  const { articlesList, setArticlesList } =
    useOutletContext<ArticlesContextType>();
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const normalisedQuery = searchQuery.trim().toLowerCase();

  const filteredArticles = articlesList.filter((article) => {
    const matchesStatus =
      selectedStatus === "all" || article.status === selectedStatus;

    const matchesSearch = article.title.toLowerCase().includes(normalisedQuery);

    return matchesStatus && matchesSearch;
  });

  function handleDeleteArticle(id: string) {
    if (!window.confirm("Are you sure you want to delete this article?")) {
      return;
    }
    setArticlesList((previousArticles) => {
      return previousArticles.filter((article) => article.id !== id);
    });
  }

  return (
    <>
      <section className="mb-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-heading">
              Manage articles
            </h2>
            <p className="text-sm text-muted">
              Create, edit and organise your content.
            </p>
          </div>

          <Link
            to="/articles/new"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
          >
            <Plus size={18} />
            New article
          </Link>
        </div>
      </section>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <StatusFilters
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />

        <ArticleSearch query={searchQuery} onQueryChange={setSearchQuery} />
      </div>
      {filteredArticles.length === 0 ? (
        <div>No articles found</div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredArticles.map((article) => (
            <div key={article.id} className="flex items-stretch gap-4">
              <div className="min-w-0 flex-1">
                <ArticleCard article={article} />
              </div>

              <button
                type="button"
                onClick={() => handleDeleteArticle(article.id)}
                className="inline-flex shrink-0 cursor-pointer items-center self-center rounded-md px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-50"
              >
                <div className="flex gap-2">
                  <Trash size={18} />
                  <span>Delete</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
