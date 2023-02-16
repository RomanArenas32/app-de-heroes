import { heroes } from "../data/heroes"


export const getHeroByName = (name) => {
 

    const heroName = name.toLocaleLowerCase().trim();
    if(heroName == "") return [];
    return heroes.filter(el => el.superhero.toLocaleLowerCase().includes(heroName));

}
