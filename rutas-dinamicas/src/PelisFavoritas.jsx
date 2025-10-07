import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

export default function PelisFavoritas() {
    const [peliculas] = useOutletContext()

    const favoritas = peliculas.filter(peli => peli.favorito === true)

    return (
        <div className="catalogo">
            <h2>Películas Favoritas</h2>

            <div className="grid">
                {favoritas.length > 0 ? (
                    favoritas.map(peli => (
                        <div key={peli.id} className="card">
                            <h2 className="titulo">{peli.titulo}</h2>
                            <p className="director">
                                Director: {peli.director} • Año: {peli.año}
                            </p>
                            <p className="descripcion">{peli.descripcion}</p>
                            <Link to={`/peliculas/${peli.id}`}>
                                <button className="btn">Ver más</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className='aviso'>No tenés películas favoritas</p>
                )}
            </div>
        </div>
    )
}