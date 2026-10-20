import { useParams } from "react-router";
import EditArticlePage from "./EditArticlePage";

export default function EditArticleRoute() {
  const { id } = useParams();

  return <EditArticlePage key={id} />;
}
