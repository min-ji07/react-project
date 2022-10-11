// import logo from './logo.svg';
// import './App.css';
import styles from "../css/App.module.css";
import { useState, useEffect } from "react";
// 해당 파일내에서 다른 파일과 겹치는 클래스명을 사용해도 괜찮음
// html에서 랜덤 className으로 보여줄 것이기 때문에
import Movie from "../components/Movie";

function MovieHome(){
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
    <div className={styles.wrap}>
      {/* 부모 컴포넌트 --> 자식 컴포넌트로 data 보내기 */}
      {loading ?
      <h1 className={styles.title}>Loading...</h1>
      :
      <div className={styles.grid}>
        {movies.map((banana) =>
          <Movie
              // key는 React 내 map 메소드 안에서 component를 render할 때 사용! 필수
              key={banana.id}
              id={banana.id}
              // 속성 이름 다르면 안 나오거나 오류 날 수 있음
              coverImg={banana.medium_cover_image}
              title={banana.title}
              summary={banana.summary}
              genres={banana.genres}/>)}
      </div>
        }
    </div>
  );
}
export default MovieHome;