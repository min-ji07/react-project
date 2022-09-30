// 클릭한 영화의 제목과 내용 및 나머지를 가져옴
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState();
    const {id} = useParams();
    // .. ? 얘를 감싸니까 왜 오류가 사라짐..?
    // :id(변수명은 상관없음) 값을 넘겨줌
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
      setLoading(true);
      setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie);
    return (
        <div>
            <h1>Movie Detail</h1>
            {loading ? (
                <div>
                    <h1>{movie.title_long}</h1>
                    <img src={movie.large_cover_image} />
                    <ul>
                        {/* movie genres가 배열이니까 안에 있는 값을 전부 li로 뿌려줌 */}
                        {movie.genres.map((g) => <li key={g}>{g}</li>)}
                    </ul>
                    <p>{movie.description_intro}</p>
                </div>
            )
            : <h1>Loading...</h1>}
        </div>
    )
}
export default Detail;