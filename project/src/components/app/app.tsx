import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  name: string;
  genre: string;
  releaseDate: number;
}

function App(props: MainPageProps): JSX.Element {
  return <MainPage name={props.name} genre={props.genre} releaseDate={props.releaseDate} />;
}

export default App;
