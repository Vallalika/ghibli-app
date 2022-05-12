import React from 'react';

const FilmInfo = ({filmInfo}) => {

    return(
        <>
            <img src={filmInfo.image} alt="film poster" id="poster"/>
            <ul>
                <li>{filmInfo.description}</li>
                <li>{filmInfo.director}</li>
                <li>{filmInfo.producer}</li>
                <li>{filmInfo["release_date"]}</li>
                <li>{filmInfo["running_time"]}</li>
                <li>{filmInfo["rt_score"]}</li>
            </ul>
        </>
    )
}

export default FilmInfo