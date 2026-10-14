import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
