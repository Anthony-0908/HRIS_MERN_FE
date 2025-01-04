import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";



// const Login = lazy(() => import('../layouts/Layout'))
const Layout = lazy(() => import('../layouts/layout'))
const Login = lazy(() => import('../pages/Login'))
const Userpage = lazy(() => import('../pages/Admin/UserPage'))

const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <Suspense fallback={<div>Loading...</div>}>
              <Layout />
            </Suspense>
          ),
        children:[
            {
                path:'User',
                element:(
                    <Suspense fallback={<div>Loading...</div>}>
                      <Userpage />
                    </Suspense>
                  ),
            }
        ]
    },

    {
        path:'/Login',

    }
])

export default router;