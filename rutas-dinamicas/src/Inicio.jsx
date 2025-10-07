import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [peliculas, setPeliculas] = useState([
    {
      id: 1,
      titulo: "Matrix",
      director: "Lana y Lilly Wachowski",
      año: 1999,
      descripcion: "Un hacker descubre la verdad detrás de la realidad simulada en la que vive y lidera la rebelión contra las máquinas.",
      favorito: false
    },
    {
      id: 2,
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      director: "Peter Jackson",
      año: 2001,
      descripcion: "Un hobbit hereda un anillo poderoso y emprende una peligrosa misión para destruirlo antes de que caiga en manos del enemigo.",
      favorito: false
    },
    {
      id: 3,
      titulo: "Inception",
      director: "Christopher Nolan",
      año: 2010,
      descripcion: "Un ladrón especializado en infiltrarse en los sueños debe cumplir una misión imposible: implantar una idea en la mente de alguien.",
      favorito: false
    },
    {
      id: 4,
      titulo: "Pulp Fiction",
      director: "Quentin Tarantino",
      año: 1994,
      descripcion: "Historias entrelazadas de criminales, boxeadores y gánsteres en Los Ángeles, narradas con un estilo único y no lineal.",
      favorito: false
    },
    {
      id: 5,
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: 2014,
      descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      favorito: false
    }
  ]);

  return (
    <>
      <section className="hero" aria-labelledby="bienvenido">
        <h1 id="bienvenido">Bienvenido a nuestra sala de cine online</h1>
        <p>
          Descubrí los últimos estrenos, los clásicos que marcaron generaciones y
          las historias que quedan en la memoria. Explorá reseñas, sinopsis y
          recomendaciones para encontrar tu próxima película favorita.
        </p>
      </section>

      <Outlet context={[peliculas, setPeliculas]}/>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/peliculas/all">Peliculas</Link>
        </li>
        <li>
          <Link to="/peliculas/favoritos">Peliculas Favoritas</Link>
        </li>
      </ul>
    </>
  )
}

export default App
