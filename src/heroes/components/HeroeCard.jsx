import { Link } from "react-router-dom";
import './heroCard.css'

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `../../../assets/heroes/${id}.jpg`;
  return (
    <>
      <div className="card">
      <img src={heroImg} alt= "superhero" />
        <li>{superhero}</li>
        <li>{publisher}</li>
        <li>{alter_ego}</li>
        <li>{first_appearance}</li>
        <li>{characters}</li>
        <Link to={`/hero/${id}`}><span>Mas..</span></Link>
      </div>
    </>
  );
};
