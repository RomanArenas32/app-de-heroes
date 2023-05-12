import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../../heroes/helpers/getHeroById";
import "../../heroes/components/heroCard.css";
export const HeroPage = () => {
  const params = useParams();
  const { id } = params;

  const heroById = useMemo(() => getHeroById(id), [id]);
  const heroImg = `../../../assets/heroes/${id}.jpg`;

  return (
    <div className="contenedor-card">
      <div className="card">
        <img src={heroImg} alt="" />
        <h3>{heroById.publisher}</h3>
        <h3>{heroById.id}</h3>
      </div>
    </div>
  );
};
