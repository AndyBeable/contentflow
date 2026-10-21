import { type Dispatch, type SetStateAction } from "react";
import { Outlet, useOutletContext } from "react-router";
import type { Article } from "../../types/article";

export type ArticlesContextType = {
  articlesList: Article[];
  setArticlesList: Dispatch<SetStateAction<Article[]>>;
};

export default function ArticlesLayout() {
  const { articlesList, setArticlesList } =
    useOutletContext<ArticlesContextType>();

  return <Outlet context={{ articlesList, setArticlesList }} />;
}
