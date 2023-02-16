import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { getHeroById } from "../../heroes/helpers/getHeroById"

export const HeroPage = () => {


  const params = useParams();
  const {id} = params
  

  const heroById = useMemo(()=> getHeroById(id), [id]);

  return (
    <>
      <h3>{heroById.publisher}</h3>
      <h3>{heroById.id}</h3>
    </>
  )
}


