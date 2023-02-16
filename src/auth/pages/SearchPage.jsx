import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHeroByName } from "../../heroes/helpers/getHeroByName";

export const SearchPage = () => {

  const [name, setName] = useState("");

  const heroName = useMemo(()=> getHeroByName(name), [name]);
 

  const navigate = useNavigate();

  const redirigir = (e) => {
    e.preventDefault();
    navigate(`/hero/${heroName[0].id}`)
  };

  return (
    <form>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="">Nombre</label>
      </div>
      <hr />
      <div>
        <button onClick={redirigir}>Buscar</button>
      </div>
    </form>
  );
};
