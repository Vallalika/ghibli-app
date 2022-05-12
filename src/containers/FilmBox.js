import React, {useState, useEffect} from "react";
import FilmList from "../components/FilmList";
import FavList from "../components/FavList";

const FilmBox = () => {

    // States
    const [filmList, setFilmList] = useState([])
    const [favList, setFavList] = useState([])

    // UseEffect
    useEffect( () => {
        loadFilms();
    }, [])

    const loadFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(films => setFilmList(films))
        .catch(error => console.error);
    }

    const addToFavList = (film) => {
        const updatedFavList = [...favList, film];
        setFavList(updatedFavList);
    }


    return (
        <>
            <h2> FilmBox.js </h2>
            {filmList.length > 0 ? <FilmList FilmList={filmList} favList={addToFavList}/> : null}
            <FavList favList={favList}/>
        </>
    )
}

export default FilmBox