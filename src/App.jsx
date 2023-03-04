import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import About from "./pages/About/About"
import Blog from "./pages/Blogs/Blog"
import Home from "./pages/home/Home"
import Contact from './pages/Contact/Contact'
import Shop from "./pages/Shop/Shop"
import Seasonings from "./pages/products/Seasonings/Seasonings"
import CasingPro from "./pages/products/CasingPro/CasingPro"
import StarterPro from "./pages/products/StarterPro/StarterPro"
import BakeryCake from "./pages/products/BakeryCake/BakeryCake"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Cart from "./pages/Cart/Cart"
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
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/seasonings',
          element:<Seasonings></Seasonings>
        },
        {
          path:'/casing',
          element:<CasingPro></CasingPro>
        },
        {
          path:'/starter',
          element:<StarterPro></StarterPro>
        },
        {
          path:'/bekary',
          element:<BakeryCake></BakeryCake>
        },
        {
          path:'/product/:productId',
          element:<SingleProduct></SingleProduct>
        },
        {
          path:'/cart',
          element:<Cart></Cart>
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
