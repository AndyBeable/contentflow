import { useParams, useOutletContext, useNavigate } from "react-router";
import { useState, type SubmitEvent } from "react";
import type { Status } from "../../types/article";
import type { ArticlesContextType } from "../../components/ArticlesLayout/ArticlesLayout";

type ArticleFormData = {
  title: string;
  author: string;
  body: string;
  status: Status;
};

export default function EditArticlePage() {
  const { id } = useParams();
  const [error, setError] = useState("");
  const { articlesList, setArticlesList } =
    useOutletContext<ArticlesContextType>();
  const navigate = useNavigate();

  const matchedArticle = articlesList.find((article) => article.id === id);

  const [formData, setFormData] = useState<ArticleFormData>({
    title: matchedArticle?.title ?? "",
    author: matchedArticle?.author ?? "",
    body: matchedArticle?.body ?? "",
    status: matchedArticle?.status ?? "draft",
  });

  function handleOnSave(event: SubmitEvent<HTMLFormElement>) {
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

    const updatedArticles = articlesList.map((article) => {
      if (article.id !== id) {
        return article;
      } else {
        const updatedArticle = {
          ...article,
          title: formData.title.trim(),
          author: formData.author.trim(),
          body: formData.body.trim(),
          status: formData.status,
        };
        return updatedArticle;
      }
    });

    setArticlesList(updatedArticles);
    navigate("/articles");
  }

  return (
    <>
      {!matchedArticle ? (
        <p>That article doesnt exist</p>
      ) : (
        <form
          onSubmit={handleOnSave}
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
            <label
              htmlFor="author"
              className="text-sm font-medium text-heading"
            >
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
            <label
              htmlFor="status"
              className="text-sm font-medium text-heading"
            >
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
            Save changes
          </button>
        </form>
      )}
    </>
  );
}
