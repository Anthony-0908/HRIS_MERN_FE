import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute.tsx"; // Import the ProtectedRoute

const Layout = lazy(() => import("../layouts/Layout"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard.tsx"));
const Userpage = lazy(() => import("../pages/Admin/UserPage"));
const CreatePage = lazy(() => import("../features/admin/UserPage/CreateEmploye"));
const ViewEmployee = lazy(() => import("../features/admin/UserPage/ViewEmployee"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "User",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Userpage />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <ProtectedRoute> {/* ✅ Protect Dashboard Route */}
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "Create",
            element: (
              <ProtectedRoute> {/* ✅ Protect Create Route */}
                <Suspense fallback={<div>Loading...</div>}>
                  <CreatePage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute> {/* ✅ Protect Dashboard Route */}
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      </ProtectedRoute>
    ),
  },
]);

export default router;
