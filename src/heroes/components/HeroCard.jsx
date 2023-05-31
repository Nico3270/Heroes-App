import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    let imagen = `src/assets/heroes/${id}.jpg`;
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imagen} className="card-img animate__animated animate__bounce" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-boy">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && (<p className="card-text">{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-mutted">{first_appearance}</small>
                            </p>
                            <br></br>
                            <Link className="btn btn-outline-danger pb-2" to = {`/hero/${id}`}>Mas información</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
