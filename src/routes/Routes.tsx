import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorBoundry from "../components/ErrorBoundry";
import NotFound from "../pages/NotFound";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import MainLayouts from "../layout/MainLayouts";

const ArticlesPage = lazy(() => import("../pages/ArticlesPage"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const AuthorPage = lazy(() => import("../pages/AuthorPage"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorBoundry />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "articles",
        element: (
          <Suspense fallback={<Loader />}>
            <ArticlesPage />
          </Suspense>
        ),
        // errorElement: <ErrorBoundry />,
      },
      {
        path: "blog/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <BlogDetails />
          </Suspense>
        ),
        // errorElement: <ErrorBoundry />,
      },
      {
        path: "author/:authorId",
        element: (
          <Suspense fallback={<Loader />}>
            <AuthorPage />
          </Suspense>
        ),
        // errorElement: <ErrorBoundry />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default Routes;
