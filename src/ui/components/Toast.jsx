export const Toast = ({ user, funcion }) => {
    return (
      <>
        <p>
          <a
            className="btn btn-success"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {user !== "" ? user : "Log in"}
          </a>
          {user !== "" ?<button onClick = {()=>funcion()}  className="btn btn-danger m-2">Salir</button>:""}
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body m-2">Usuario activo</div>
        </div>
      </>
    );
  };
  