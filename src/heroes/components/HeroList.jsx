import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList =({Publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(Publisher), [Publisher]);
    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroes.map((hero) => {
                    return <HeroCard  key={hero.id} {...hero} />
                })}
            </div>
        </>
    )
}