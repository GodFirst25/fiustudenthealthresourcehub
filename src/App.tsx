import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ResourceDetailsPage } from "./pages/ResourceDetailsPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:categorySlug" element={<CategoryPage />} />
        <Route path="resource/:resourceId" element={<ResourceDetailsPage />} />
      </Route>
    </Routes>
  );
}
