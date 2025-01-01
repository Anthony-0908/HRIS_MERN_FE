import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";



const Login = lazy(() => import('../pages/Login'))


const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        )
    }
])

export default router;