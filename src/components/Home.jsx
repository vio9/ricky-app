import { Link } from 'react-router-dom';

export default function Home() {


  return(
    <>
      <h1>Bienvenue sur le site de Rick et Morty</h1>
      <Link to={`/characters`}>Voir tous les personnages</Link>
    </>

  )
}