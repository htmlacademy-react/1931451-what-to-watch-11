import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';


type FilmCardProps = {
  film: Film;
}


function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, name, poster, video} = film;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article
      id={`${id}`}
      key={id}
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <div className="small-film-card__image">
        {isPlaying ?
          <VideoPlayer
            isPlaying={isPlaying}
            src={video}
            poster={poster}
          />
          : <img src={poster} alt={name} width="280" height="175" /> }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FilmPage.replace(':id', `${id}`)}>{name}</Link>
      </h3>
    </article>
  );
}

export {FilmCard};
