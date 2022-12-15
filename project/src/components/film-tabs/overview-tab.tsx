import { Fragment } from 'react';
import { Film } from '../../types/film';


type OverviewTabProps = {
  film: Film;
};


function OverviewTab({film}: OverviewTabProps): JSX.Element {
  const {ratingScore, ratingCount, director, actors, description} = film.overview;

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {actors.join(', ')} and other</strong></p>
      </div>
    </Fragment>
  );
}

export default OverviewTab;
