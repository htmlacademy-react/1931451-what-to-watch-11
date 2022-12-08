export type FilmOverview = {
  description: string;
  ratingScore: number;
  ratingCount: number;
  director: string;
  actors: string[];
}

export type FilmReviews = {
  comment: string;
  autor: string;
  commentDate: string;
  rating: number;
};

export type Film = {
  id: number;
  name: string;
  genre: string;
  year: number;
  poster: string;
  bigPoster: string;
  video: string;
  overview: FilmOverview;
  reviews: FilmReviews[];
}

export type Films = Film[];
