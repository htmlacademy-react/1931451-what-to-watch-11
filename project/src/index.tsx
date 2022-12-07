import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsData } from './mocks/films';

// const DataFilm = {
//   Name: 'The Grand Budapest Hotel',
//   Genre: 'Drama',
//   ReleaseDate: 2014,
// } as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      film={filmsData[0]}
      films={filmsData}
    />
  </React.StrictMode>,
);
