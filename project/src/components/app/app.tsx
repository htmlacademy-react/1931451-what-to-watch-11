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


type MainPageProps = {
  name: string;
  genre: string;
  releaseDate: number;
}

function App(props: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPageScreen name={props.name} genre={props.genre} releaseDate={props.releaseDate} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen/>}
        />
        <Route
          path={AppRoute.FilmPage}
          element={<FilmPageScreen/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen/>
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
