import { useNavigate } from 'react-router-dom';
import * as S from "../components/Movie/Movie.style.jsx"

const url = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, vote_average, poster_path}) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movies/${title}`,{
              state: {
              url : {url},
              poster_path : {poster_path}
            }
        });
  };

  return (
    <S.Movie_container onClick={onClickImg}>
    <S.m_c_img src= {url + poster_path}/>
    <S.movie_info>
      <h4>{title}</h4>
      <span>{vote_average}</span>
    </S.movie_info>
  </S.Movie_container>
  );
}

export default Movie;