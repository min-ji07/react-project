
import PropTypes from 'prop-types';
// 이름은 부모에서 가져와도 상관없이 원하는대로 바꿀 수 있음
function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
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
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // string을 가진 array
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;