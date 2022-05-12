import React from 'react';
import FilmTitleClickable from './FilmTitleClickable';

const FilmContainer = ({filmInfo,favList}) => {

    // film info is what we expect 
    return(
        <>
            <h4>This is FilmContainer.js</h4>
            <FilmTitleClickable film={filmInfo} favList={favList}/>
        </>

    )
}

export default FilmContainer