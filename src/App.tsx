// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
        <RouterProvider router={router} />
    
     {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-blue-500">Hello, React with Tailwind CSS!</h1>
    </div> */}
    </>
  )
}

export default App
