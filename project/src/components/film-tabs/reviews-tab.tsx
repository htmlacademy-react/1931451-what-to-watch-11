/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Film } from '../../types/film';


type ReviewsTabProps = {
  film: Film;
};


const renderCol = (array: Film['reviews']): JSX.Element[] => array.map((obj, id) => {
  const {comment, autor, commentDate, rating} = obj;
  const keyValue = `${id}-${autor}`;

  return (
    <div className="review" key={keyValue}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{autor}</cite>
          <time className="review__date" dateTime="2016-12-24">{commentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1)}</div>
    </div>
  );
});

function ReviewsTab({film}: ReviewsTabProps): JSX.Element {
  const lengthReviews = film.reviews.length;
  const firstArray = film.reviews.slice(0, lengthReviews / 2);
  const secondArray = film.reviews.slice(lengthReviews / 2, lengthReviews);


  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {renderCol(firstArray)}
      </div>

      <div className="film-card__reviews-col">
        {renderCol(secondArray)}
      </div>
    </div>
  );
}

export default ReviewsTab;
