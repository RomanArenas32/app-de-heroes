import { HeroeList } from "../components/HeroeList";

export const MarvelPage = () => {

  return (
    <div>
      <h1 className="title">MARVEL</h1>
      <hr />
     <HeroeList publisher={"Marvel Comics"} />

    </div>
  )
}

