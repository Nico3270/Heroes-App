
import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (Publisher) => {
    console.log(Publisher);
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(Publisher)) {
        throw new Error(`${Publisher} is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === Publisher);
}