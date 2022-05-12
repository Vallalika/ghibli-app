import React from "react";
import FavListItem from "./FavListItem";

const FavList = ({favList}) => {

    const favArray = favList.map( (film, index) => {
        return <FavListItem key={index} film={film} favList={favList}/>
    })

    return (
        <>
            {favArray}
        </>
    )
}

export default FavList;