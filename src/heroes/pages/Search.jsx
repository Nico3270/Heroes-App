import { useState } from "react";
import querySring from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const query = querySring.parse(location.search);
    const { q = "" } = query;
    const heroes = getHeroesByName(q);

    const [inputValue, setInputValue] = useState(q);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearInput = () => {
        setInputValue("");
    };

    const sendForm = (event) => {
        event.preventDefault();
        console.log(inputValue);
        navigate(`?q=${inputValue}`);

    }

    return (
        <>
            <h1>Search Page</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={sendForm}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresar búsqueda"
                            value={inputValue}
                            onChange={handleInputChange}
                            name="searchText"
                            autoComplete="off"
                        />
                        <Link
                            to={`/search?q=${encodeURIComponent(inputValue)}`}
                            className="btn btn-outline-danger mt-3 btn-lg"
                            onClick={handleClearInput}
                            type="submit"
                        >
                            Realizar búsqueda
                        </Link>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {(inputValue === "" && heroes.length > 0) ? (<div className="alert alert-success">Ingresar busqueda</div>) : <p></p>}

                    {(heroes.length !== 0) ? heroes.map((heroe) => {
                        return (
                            <HeroCard key={heroe.superhero} {...heroe} />
                        )
                    })
                        : <div className="alert alert-danger">{`No se encontró en la búsqueda ${q} `}</div>}
                    




                </div>
            </div>
        </>
    );
};
