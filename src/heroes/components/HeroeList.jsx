import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
  const listHeroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <>
      {listHeroes.map((el) => (
        <HeroeCard key={el.id} {...el} />
      ))}
    </>
  );
};
