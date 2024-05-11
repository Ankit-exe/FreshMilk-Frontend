import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { HomePage } from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import { UserProfile } from "./pages/UserProfile";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import ManageShopPage from "./pages/ManageShopPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route
          path="/manage-shop"
          element={
            <Layout>
             <ManageShopPage />
            </Layout>
          }
        />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
