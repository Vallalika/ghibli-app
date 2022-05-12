import React from "react";
import FilmTitleClickable from "./FilmTitleClickable";

const FavListItem = ({film, favList}) => {


    return (
        <>
            <FilmTitleClickable film={film} favList={favList}/>
        </>
    )
}

export default FavListItem