import {useEffect, useState} from 'react';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';
import  CharsCard from './Card';
import {Button} from '@material-ui/core';

export default function CharsList() {
    const [active, setActive] = useState(false)

    const handleChange = () => {
      setActive(!active)
    }
    const [charsList, setCharsList] = useState([])
    const [loading, setLoading] = useState(true)

    const oneDeleteChar = (id) => {
        const newListChar = charsList.filter((char) => char.id !== id)
        setCharsList(newListChar)
    }




   /* useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
             .then((res => setCharsList(res.data.results)))
             .catch((err => {
               console.error(err.reponse)
             }))
         }, [])

            console.log(charsList) */

         useEffect(() => {
            const getCharsList = async () => {
                try{
                    const charsList = await axios.get('https://rickandmortyapi.com/api/character')
                    setCharsList(charsList.data.results)
                } catch(err) {
                    console.log(err)
                } finally {
                    setLoading(false)
                }
            }
            getCharsList()
         }, [loading])

         console.log(charsList)

       if(loading) return <CircularProgress />



    return(
        <div>
            {
                active ? (
                    <Button color="secondary" variant="contained"
                    onClick={handleChange}>Return to the list</Button>
                ) : (
                    <Button color="primary" variant="contained"
                    onClick={handleChange}>Show dead only </Button>
                )
            }
        
           {
           ((charsList.length) && (charsList !== 0)) && 
           active ? (
            charsList.filter((char) => char.status === 'Dead')
            .map((char) => {
               return(
                  <>
                   <CharsCard 
                   key={char.id}
                   id={char.id}
                   name={char.name}
                   status={char.status}
                   image={char.image}
                   species={char.species}
                   gender={char.gender}
                   oneDeleteChar={oneDeleteChar}
                   />
                   </>
               )

           })
            ) : (
                charsList.map((char) => {
                    return(
                       <>
                        <CharsCard 
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        image={char.image}
                        species={char.species}
                        gender={char.gender}
                        oneDeleteChar={oneDeleteChar}
                        />
                        </>
                    )
     
                })

            )
           }


        </div>

    )
}