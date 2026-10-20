import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import EditArticleRoute from "./pages/EditArticlePage/EditArticleRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NewArticlePage from "./pages/NewArticlePage/NewArticlePage";
import ArticlesLayout from "./components/ArticlesLayout/ArticlesLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="articles" element={<ArticlesLayout />}>
            <Route index element={<ArticlesPage />} />
            <Route path="new" element={<NewArticlePage />} />
            <Route path=":id/edit" element={<EditArticleRoute />} />
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
