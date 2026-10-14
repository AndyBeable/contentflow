import { Search, X } from "lucide-react";

type ArticleSearchProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export default function ArticleSearch({
  query,
  onQueryChange,
}: ArticleSearchProps) {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 rounded-md border border-border-subtle bg-surface px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
      <Search size={18} className="shrink-0 text-muted" />

      <input
        type="search"
        aria-label="Search articles"
        placeholder="Search articles..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className="min-w-0 flex-1 py-2.5 text-sm text-heading outline-none placeholder:text-muted"
      />

      {query.length > 0 && (
        <button
          type="button"
          onClick={() => onQueryChange("")}
          aria-label="Clear search"
          className="cursor-pointer rounded p-1 text-muted hover:bg-app hover:text-heading"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
