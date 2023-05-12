import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers";
import { HeroeCard } from "./HeroeCard";
import './heroCard.css';

export const HeroeList = ({ publisher }) => {
  const listHeroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="lista-hero">
      {listHeroes.map((el) => (
        <HeroeCard key={el.id} {...el} />
      ))}
    </div>
  );
};
