import { Link, useOutletContext } from 'react-router-dom'

export default function Pelis() {
    const peliculas = useOutletContext()

    return (
        <div className="catalogo">
            <h2>Catálogo de películas</h2>

            <div className="grid">
                {peliculas.map(peli => {
                    return (
                        <div key={peli.id} className="card">
                            <h2 className="titulo">{peli.titulo}</h2>
                            <p className="director">
                                Director: {peli.director} • Año: {peli.año}
                            </p>
                            <p className="descripcion">{peli.descripcion}</p>
                            <Link to={`/peliculas/${peli.id}`}><button className="btn" >Ver más</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}