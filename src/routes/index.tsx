
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";



// const Login = lazy(() => import('../layouts/Layout'))
const Layout = lazy(() => import('../layouts/layout'))
const Login = lazy(() => import('../pages/Login'))
const Userpage = lazy(() => import('../pages/Admin/UserPage'))
const CreatePage = lazy(() => import('../features/admin/UserPage/CreateEmploye'))
const  ViewEmployee = lazy(() => import('../features/admin/UserPage/ViewEmployee')) 

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
                  children:[
                    {
                      path:'',
                      element:( 
                        <Suspense fallback={<div>Loading...</div> }>
                          <ViewEmployee/>
                        </Suspense>

                      )
                    },
                    {
                         path:'Create',
                         element:(
                            <Suspense fallback={<div>Loading...</div>}>
                                <CreatePage />
                            </Suspense>
                         )
                    }
                   

                  ]

            }
        ]
    },

    {
        path:'/Login',

    }
])


export default router;