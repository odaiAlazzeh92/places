import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./Root";
//import NewPlace from "./places/pages/NewPlace";
import User from "./user/pages/User";
//import UserPlaces from "./places/pages/UserPlaces";
//import UpdatePlace from "./places/pages/UpdatePlace";
//import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import "./index.css";
import ProtectedRoutes from "./ProtectedRoutes";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<User />} />
      <Route path="/:userId/places"  lazy={() => import("./places/pages/UserPlaces")}/>
      <Route element={<ProtectedRoutes />}>
        <Route path="/places/new" lazy={() => import("./places/pages/NewPlace")}/>
        <Route path="/places/:placeId" lazy={() => import("./places/pages/UpdatePlace")} />
      </Route>
      <Route path="*" element={<User />} />
      <Route path="/auth" lazy={() => import("./user/pages/Auth")} />
    </Route>
  )
);

export default function App() {
  const { userId, token, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token, login, logout, userId }}
    >
      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </AuthContext.Provider>
  );
}
