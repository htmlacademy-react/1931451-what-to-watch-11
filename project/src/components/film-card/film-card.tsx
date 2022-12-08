/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, name, poster} = film;
  const [filmid, setFilmid] = useState(id);

  const handleMouseEnter = () => {
    // setFilmObj(() => film);
    setFilmid(id);
  };

  return (
    <article onMouseEnter={handleMouseEnter} id={`${id}`} key={id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FilmPage.replace(':id', `${id}`)}>{name}</Link>
      </h3>
    </article>
  );
}

export {FilmCard};
