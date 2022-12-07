import { FilmCard } from '../../components/film-card/film-card';
import { Films } from '../../types/film';


type FilmsListProps = {
  films: Films;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard film={item} key={item.id} />)}
    </div>
  );
}

export default FilmsList;
