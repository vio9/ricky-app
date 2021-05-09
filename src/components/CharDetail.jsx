import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function CharDetail() {

  const [charDetail, setCharDetail] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const getCharsDetail = async () => {
      try {
        const charDetailData = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharDetail(charDetailData.data)
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getCharsDetail()
  }, [id])

    if(loading) return <CircularProgress />

console.log(charDetail)

    return(
      <>
        <Link to={`/`}>Revenir à la home</Link>
        <h1>{charDetail.id}</h1>
        <h1>Salut je suis {charDetail.name}</h1>
        <img alt={charDetail.name} src={charDetail.image} />
        <span>{charDetail.genre}</span>
        <span>{charDetail.species}</span>
        <span>{charDetail.alive}</span>
        <p>You can see me in those episodes :</p>
        <ol>
        {
          charDetail.episode.map((episode, index) => {
            return (
                <li key={index}>{episode}</li>
            )
          })
        }
        </ol>
      </>

  )
}