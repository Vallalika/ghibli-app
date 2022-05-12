import React, {useState} from 'react'
import FilmInfo from './FilmInfo'

const FilmTitleClickable = ({film,favList}) => {

    const [clickState,setClickState] = useState('hidden')

    const handleTitleClick = () =>{
        if (clickState === 'hidden') {
            setClickState('showing')
        } else {
            setClickState('hidden')
        }
    }

    const handleFavClick = () => {
        favList(film)
        
    }
 
    return ( 
        <>
            
            <h4 onClick={handleTitleClick} id="titleclicker" >{film.title}  {film["original_title"]}</h4>
            <img src={film["movie_banner"]} alt="movie thumbnail" id="thumbnail"/>
            <button onClick={handleFavClick}>Add to Favs</button>
            {clickState === 'showing' ? <FilmInfo filmInfo={film}/> : null}
        </>
    )
}

export default FilmTitleClickable