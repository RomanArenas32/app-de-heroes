import { Route, Routes } from "react-router-dom";
import { HeroPage, SearchPage } from "../auth/pages/index";
import { DCPage, MarvelPage } from "../heroes/pages/index";
export const HeroesRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarvelPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
      </Routes>
    </>
  );
};
