import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import About from "./pages/About/About"
import Blog from "./pages/Blogs/Blog"
import Home from "./pages/home/Home"
import Contact from './pages/Contact/Contact'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
