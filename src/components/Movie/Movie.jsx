import * as S from './Movie.style.jsx';
import { useNavigate } from 'react-router-dom';

const url = "https://image.tmdb.org/t/p/w1280/"

export default function Movie({title, poster_path,vote_average}) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${title}`,{
      state : {
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
  )
}