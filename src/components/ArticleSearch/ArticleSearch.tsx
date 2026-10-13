type ArticleSearchProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export default function ArticleSearch({
  query,
  onQueryChange,
}: ArticleSearchProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      {query.length > 0 && (
        <button
          type="button"
          onClick={() => onQueryChange("")}
          className="rounded bg-slate-500 px-3 py-2 text-white"
        >
          Clear
        </button>
      )}
    </>
  );
}
