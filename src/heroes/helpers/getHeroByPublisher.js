
import { heroes } from '../data/heroes';


export const getHeroByPublisher = (publisher) => {
    
    const validPublisher = ["DC Comics", "Marvel Comics"];

    if(!validPublisher.includes(publisher)) return
    return heroes.filter(el => el.publisher == publisher);

}