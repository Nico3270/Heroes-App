import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {
    const navigate = useNavigate();
    const onNavigateBack =() => {
        navigate(-1)
    }
    const { id } = useParams();
    const hero = useMemo(()=> getHeroById(id), [id]);
    return (
        <>
            <div className="row mt-5">
                <div className="container d-flex">
                    <div className="col-7">
                        <img src={hero.link} className="img-fluid prueba rounded float-start animate__animated animate__backInLeft" 
                        alt={hero.superhero} />
                    </div>
                    <div className="col-5">
                        <h3>{hero.superhero}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Alter ego: </b> {hero.alter_ego}</li>
                            <li className="list-group-item"><b>Publisher: </b> {hero.publisher}</li>
                            <li className="list-group-item"><b>First appearance: </b> {hero.first_appearance}</li>
                        </ul>
                        <h5 className="mt-3">Characters</h5>
                        <p>{hero.characters}</p>
                        <button className="btn btn-danger mt-4 btn-lg" onClick={() => onNavigateBack()}>Regresar</button>
                    </div>
                </div>
            </div>
        </>
    );
}
