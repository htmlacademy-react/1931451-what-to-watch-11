import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPageScreen from '../../pages/main-page-screen/main-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmPageScreen from '../../pages/film-page-screen/film-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import { Film, Films } from '../../types/film';


type AppScreenProps = {
  film: Film;
  films: Films;
};


function App({film, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPageScreen film={film} films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen/>}
        />
        <Route
          path={AppRoute.FilmPage}
          element={<FilmPageScreen film={film} films={films} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen/>}
        />
        <Route
          path='*'
          element={
            <Fragment>
              <h2><b>404</b> Page not found</h2>
              <br />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
