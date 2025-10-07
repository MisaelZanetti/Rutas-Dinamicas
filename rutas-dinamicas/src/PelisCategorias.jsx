import React from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom';

export default function PelisCategorias() {
    const { id } = useParams();
    const [peliculas, setPeliculas] = useOutletContext();
    peliculas.filter(peli => peli.id === parseInt(id))

    const añadirFavorito = (id) => {
        peliculas[id - 1].favorito = true
    }

    return (
        <div className='detalle-pelicula'>
            <h1>{peliculas[id - 1].titulo}</h1>
            <p className="meta">Director: {peliculas[id - 1].director} • Año: {peliculas[id - 1].año}</p>

            <p className="descripcion">
                {peliculas[id - 1].descripcion}
            </p>

            <div>
                <Link to={'/peliculas/all'}><button className="btn">Volver al catálogo</button></Link>
                <button className="btnFav" onClick={ () => añadirFavorito(id)}>Añadir Favorito</button>
            </div>
        </div>
    )
}