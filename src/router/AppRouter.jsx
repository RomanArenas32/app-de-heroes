import { Routes, Route } from "react-router-dom";
import { Navar } from "../ui/components";

import { LoginPage } from "../auth/pages/index";
import { HeroesRouter } from "./HeroesRouter";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Navar />

      <Routes>

        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRouter />
          </PrivateRouter>
        } />

      </Routes>
    </>
  );
};
