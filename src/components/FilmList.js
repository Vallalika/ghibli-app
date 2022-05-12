import React from 'react';
import FilmContainer from './FilmContainer';
import FavList from './FavList'

const FilmList = ({FilmList,favList}) => {

    const filmArray = FilmList.map( (film, index) => {
        return <FilmContainer key={index} filmInfo={film} favList={favList}/>

        
    })

    return (
        <>
            {filmArray}
        </>
    )
}

export default FilmList