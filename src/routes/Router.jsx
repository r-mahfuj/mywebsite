import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const Journals = lazy(() => import("../pages/Journals"));
const Conferences = lazy(() => import("../pages/Conferences"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/journals",
          element: <Journals></Journals>,
        },
        {
          path: "/conferences",
          element: <Conferences></Conferences>,
        },
        {
          path: "/project/:projectId",
          element: <ProjectDetails />,
        },
      ],
    },
  ],
  { basename: `/${repoName}` }
);
