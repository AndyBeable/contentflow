import { useState, type Dispatch, type SetStateAction } from "react";
import { Outlet } from "react-router";
import { articles } from "../../data/articles";
import type { Article } from "../../types/article";

export type ArticlesContextType = {
  articlesList: Article[];
  setArticlesList: Dispatch<SetStateAction<Article[]>>;
};

export default function ArticlesLayout() {
  const [articlesList, setArticlesList] = useState<Article[]>(articles);

  return <Outlet context={{ articlesList, setArticlesList }} />;
}
