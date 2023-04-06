import { Outlet } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
