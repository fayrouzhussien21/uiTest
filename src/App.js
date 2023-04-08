import { lazy } from "react";
import { Suspense } from "react";
import Moviesdetails from "./components/Moviesdetails";
import { Provider } from "react-redux";
import store from "./components/store/redux-demo";
import ErrorPage from "./components/ErrorPage";
import Moviesprovider from "./components/store/Movieprovider";
import "./App.css";
import { createBrowserRouter, RouterProvider, router } from "react-router-dom";
const Navbar = lazy(() => import("./components/navbar"));
const Movieitems = lazy(() => import("./components/Movieitems"));
const Addmovie = lazy(() => import("./components/Addmovie"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Movieitems />,
          errorElement: <ErrorPage />,
          children: [],
        },
        {
          path: "/Movie/:id",
          element: <Moviesdetails></Moviesdetails>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/Add",
          element: <Addmovie />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
