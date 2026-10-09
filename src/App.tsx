import { useState } from "react";
import { articles } from "./data/articles";
import type { StatusFilter } from "./types/articleFilters";
import ArticleCard from "./components/ArticleCard";
import StatusFilters from "./components/StatusFilters/StatusFilters";

function App() {
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all");

  const filteredArticles = articles.filter(
    (article) => selectedStatus === "all" || article.status === selectedStatus,
  );

  return (
    <>
      <StatusFilters
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      {filteredArticles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </>
  );
}

export default App;
