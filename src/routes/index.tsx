import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";



// const Login = lazy(() => import('../layouts/Layout'))
const Layout = lazy(() => import('../layouts/layout'))
const Login = lazy(() => import('../pages/Login'))

const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <Login/>
                </Layout>
            </Suspense>
        )
    }
])

export default router;