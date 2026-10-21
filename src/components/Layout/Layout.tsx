import { Outlet, NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Settings, Layers } from "lucide-react";
import type { Article } from "../../types/article";
import { articles } from "../../data/articles";

const getNavLinkClassName = (isActive: boolean) =>
  `rounded-md px-3 py-2 text-sm transition-colors flex items-center gap-2 ${
    isActive
      ? "bg-primary/10 font-medium text-primary"
      : "text-muted hover:bg-slate-100 hover:text-heading"
  }`;

const pageHeadings: Record<string, string> = {
  "/": "Dashboard",
  "/articles": "Articles",
  "/articles/new": "New Article",
  "/settings": "Settings",
};

export default function Layout() {
  const [articlesList, setArticlesList] = useState<Article[]>(() => {
    try {
      const storedArticles = localStorage.getItem("articles");

      const initialArticles = storedArticles
        ? JSON.parse(storedArticles)
        : articles;

      return initialArticles;
    } catch {
      return articles;
    }
  });

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articlesList));
  }, [articlesList]);

  const location = useLocation();

  return (
    <div className="grid min-h-screen grid-cols-1 bg-app md:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="hidden border-r border-border-subtle bg-app p-6 md:block">
        <header className="p-2 mb-6 flex items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary">
            <Layers size={18} className="text-white" />
          </div>
          <h1 className="text-xl font-semibold text-heading">ContentFlow</h1>
        </header>
        <nav className="flex flex-col gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) => getNavLinkClassName(isActive)}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) => getNavLinkClassName(isActive)}
          >
            <FileText size={18} />
            Articles
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) => getNavLinkClassName(isActive)}
          >
            <Settings size={18} />
            Settings
          </NavLink>
        </nav>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-col">
        <header className="border-b border-border-subtle bg-surface p-6">
          <h1 className="text-xl font-semibold text-heading">
            {pageHeadings[location.pathname] ?? "ContentFlow"}
          </h1>
        </header>

        <main className="flex-1 bg-surface p-6">
          <Outlet context={{ articlesList, setArticlesList }} />
        </main>
      </div>
    </div>
  );
}
