
import PropTypes from 'prop-types';
// 이름은 부모에서 가져와도 상관없이 원하는대로 바꿀 수 있음
import { Link } from 'react-router-dom';
// Link는 브라우저가 새로고침되지 않아도 페이지 이동이 가능함
import styles from "../css/App.module.css";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div className={styles.basic}>
            <img src={coverImg} alt={title}/>
            <div>
                <h2><Link to={`/movie/${id}`} className={styles.title}>{title}</Link></h2>
                <p className={styles.content}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> 
            </div>
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}
                {/* 
                여기가 이해가 잘 안되는데 
                movies 내용 안에
                genres array 안에 모든 값 g를 li key값과 li안에 text로 준다는 것
                */}
            </ul>
        </div>
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // string을 가진 array
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
// const styles = StyleSheet.create({
//     title: {
//         color: 'black',
//         fontSize: 30
//     }
// });

export default Movie;