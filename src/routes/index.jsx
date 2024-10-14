import { Route } from "react-router-dom";

import HomeTemplate from "../pages/HomeTemplate";
import Home from "../pages/HomeTemplate/Home";
import About from "../pages/HomeTemplate/About";
import ListMovie from "../pages/HomeTemplate/ListMovie";
import AdminTemplate from "../pages/AdminTemplate";
import Dashboard from "../pages/AdminTemplate/Dashboard";
import AddUser from "../pages/AdminTemplate/AddUser";
import Contact from "../pages/HomeTemplate/Contact";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "",
        element: Home,
      },
      {
        path: "about",
        element: About,
      },
      {
        path: "about/:id",
        element: About,
      },
      {
        path: "list-movie",
        element: ListMovie,
      },
      {
        path: "contact",
        element: Contact,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    children: [
      {
        path: "dashboard",
        element: Dashboard,
      },
      {
        path: "add-user",
        element: AddUser,
      },
    ],
  },
  {
    path: "*",
    element: PageNotFound,
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((child) => (
            <Route
              key={child.path}
              path={child.path}
              element={<child.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export { renderRoutes };
