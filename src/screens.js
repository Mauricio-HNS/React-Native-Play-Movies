import {Navigation} from 'react-native-navigation';
import Movie from './modules/movies/Movie';
import Search from './modules/movies/Search';
import Drawer from './modules/_global/Drawer';
import Movies from './modules/movies/Movies';
import MoviesList from './modules/movies/MoviesList';

//Registers
export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'play_movies.Movie',
    () => Movie,
    store,
    Provider,
  );
  Navigation.registerComponent(
    'play_movies.Movies',
    () => Movies,
    store,
    Provider,
  );
  Navigation.registerComponent(
    'play_movies.MoviesList',
    () => MoviesList,
    store,
    Provider,
  );
  Navigation.registerComponent(
    'play_movies.Search',
    () => Search,
    store,
    Provider,
  );
  Navigation.registerComponent('play_movies.Drawer', () => Drawer);
}
