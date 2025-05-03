// src/router/router.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './ProtectedRoute';

const Layout = lazy(() => import('../layouts/Layout'));
const AdminLogin = lazy(() => import('../pages/Admin/Login'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Userpage = lazy(() => import('../pages/Admin/UserPage'));
const CreatePage = lazy(() => import('../features/admin/UserPage/CreateEmploye'));
const ViewEmployee = lazy(() => import('../features/admin/UserPage/ViewEmployee'));

const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: 'User',
        element: (
          <Suspense fallback={<Loading />}>
            <Userpage />
          </Suspense>
        ),
        children: [
          {
            path: '',
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: 'Create',
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <CreatePage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: 'View/:id',
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <ViewEmployee />
                </Suspense>
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/Admin/login',
    element: (
      <Suspense fallback={<Loading />}>
        <AdminLogin />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
