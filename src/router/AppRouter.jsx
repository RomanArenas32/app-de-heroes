import { Routes, Route } from "react-router-dom";
import { Navar } from "../ui/components";

import { LoginPage } from "../auth/pages/index";
import { HeroesRouter } from "./HeroesRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Navar />

      <Routes>

       <Route 
        path="/login" element={
        <PublicRouter>
          <LoginPage/>
        </PublicRouter>
        }
       />

        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRouter />
          </PrivateRouter>
        } />

      </Routes>
    </>
  );
};
