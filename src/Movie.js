import {useEffect, useState} from "react";
import styles from "./App.module.css";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 요즘에 api 가져올 때 이렇게 쓴다고 함
    const getMovies = async () => {
        const json = await(
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        // fetch는 api 불러올 때 쓰나봄..
        // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        // ).then(response => response.json().then(json => {
        // setMovies(json.data.movies);     setLoading(false);     }) );
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            <h1 className={styles.title}>Movies!</h1>
            {
                loading
                    ? <h1 className={styles.title}>Loading...</h1>
                    : <div>{
                                movies.map(
                                    banana => 
                                    <div key={banana.id}>
                                        <h2>{banana.title}</h2>
                                        <p>{banana.summary}</p>
                                    </div>
                                )
                        }</div>
            }
        </div>
    )
}

export default Movie;