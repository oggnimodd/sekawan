import { ProtectedRoute } from "components";
import {
  Home,
  NotFound,
  SignInPage,
  SignUpPage,
  TicketsPage,
  MembersPage,
  CreateTicketPage,
} from "pages";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";

interface Page {
  path: string;
  component: () => JSX.Element;
  type: "public" | "protected" | "unauthenticatedOnly";
}

const routes = [
  {
    path: "/",
    component: Home,
    type: "protected",
  },
  {
    path: "/sign-in",
    component: SignInPage,
    type: "unauthenticatedOnly",
  },
  {
    path: "/sign-up",
    component: SignUpPage,
    type: "unauthenticatedOnly",
  },
  {
    path: "/tickets",
    component: TicketsPage,
    type: "protected",
  },
  {
    path: "/tickets/new",
    component: CreateTicketPage,
    type: "protected",
  },
  {
    path: "/members",
    component: MembersPage,
    type: "protected",
  },

  {
    path: "*",
    component: NotFound,
    type: "public",
  },
] satisfies Page[];

const Routes = () => {
  return (
    <ReactRouterRoutes>
      {routes.map(({ path, component: Item, type }) => {
        if (type === "public") {
          return (
            <Route element={<Item />} path={path} key={`router-link${path}`} />
          );
        }

        return (
          <Route
            element={
              <ProtectedRoute
                path={path}
                isUnauthenticatedOnly={type === "unauthenticatedOnly"}
              >
                <Item />
              </ProtectedRoute>
            }
            path={path}
            key={`router-link${path}`}
          />
        );
      })}
    </ReactRouterRoutes>
  );
};

export default Routes;
