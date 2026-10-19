import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import type { ArticlesContextType } from "../../components/ArticlesLayout/ArticlesLayout";
import type { StatusFilter } from "../../types/articleFilters";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticleSearch from "../../components/ArticleSearch/ArticleSearch";
import StatusFilters from "../../components/StatusFilters/StatusFilters";
import { Plus } from "lucide-react";

export default function ArticlesPage() {
  const { articlesList } = useOutletContext<ArticlesContextType>();
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const normalisedQuery = searchQuery.trim().toLowerCase();

  const filteredArticles = articlesList.filter((article) => {
    const matchesStatus =
      selectedStatus === "all" || article.status === selectedStatus;

    const matchesSearch = article.title.toLowerCase().includes(normalisedQuery);

    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <section className="mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      )}
    </>
  );
}
