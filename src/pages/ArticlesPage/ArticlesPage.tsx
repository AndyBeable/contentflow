import { useState } from "react";
import { articles } from "../../data/articles";
import type { StatusFilter } from "../../types/articleFilters";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticleSearch from "../../components/ArticleSearch/ArticleSearch";
import StatusFilters from "../../components/StatusFilters/StatusFilters";

export default function ArticlesPage() {
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const normalisedQuery = searchQuery.trim().toLowerCase();

  const filteredArticles = articles.filter((article) => {
    const matchesStatus =
      selectedStatus === "all" || article.status === selectedStatus;

    const matchesSearch = article.title.toLowerCase().includes(normalisedQuery);

    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <div className="flex gap-8 mb-4">
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
