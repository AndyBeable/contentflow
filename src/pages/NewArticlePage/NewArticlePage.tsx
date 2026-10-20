import { useState, type SubmitEvent } from "react";
import type { Status, Article } from "../../types/article";
import { useOutletContext, useNavigate } from "react-router";
import type { ArticlesContextType } from "../../components/ArticlesLayout/ArticlesLayout";

type ArticleFormData = {
  title: string;
  author: string;
  body: string;
  status: Status;
};

export default function NewArticlePage() {
  const { setArticlesList } = useOutletContext<ArticlesContextType>();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    author: "",
    body: "",
    status: "draft",
  });

  const navigate = useNavigate();

  function handleOnSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      formData.title.trim() === "" ||
      formData.author.trim() === "" ||
      formData.body.trim() === ""
    ) {
      setError("Please complete all required fields");
      return;
    }
    setError("");

    const id = crypto.randomUUID();

    const slug = formData.title.trim().toLowerCase().replace(/\s+/g, "-");

    const createdAt = new Date().toISOString();

    const newArticle: Article = {
      id,
      title: formData.title.trim(),
      slug,
      status: formData.status,
      author: formData.author.trim(),
      body: formData.body.trim(),
      createdAt,
    };

    setArticlesList((previousArticles) => [...previousArticles, newArticle]);

    navigate("/articles");
  }

  return (
    <>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-heading">Create article</h2>
        <p className="text-sm text-muted">
          Add a new article to your content library.
        </p>
      </div>
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full max-w-xl flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-heading">
            Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                title: event.target.value,
              }))
            }
            placeholder="Enter a title"
            className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="author" className="text-sm font-medium text-heading">
            Author
          </label>

          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                author: event.target.value,
              }))
            }
            placeholder="Enter an author"
            className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="body" className="text-sm font-medium text-heading">
            Body
          </label>

          <textarea
            id="body"
            name="body"
            value={formData.body}
            placeholder="Write your article content..."
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                body: event.target.value,
              }))
            }
            className="w-full px-3 py-2.5 min-h-40 text-sm outline-none rounded-md border-border-subtle border focus:border-primary focus:ring-2 focus:ring-primary/10 resize-y"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="status" className="text-sm font-medium text-heading">
            Status
          </label>

          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                status: event.target.value as Status,
              }))
            }
            className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2.5 text-sm text-heading outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        {error.length > 0 && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="self-end cursor-pointer rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          Submit
        </button>
      </form>
    </>
  );
}
