import MovieItem from '../components/MovieItem';
import Vuex from 'vuex';

export default {
    name: 'MovieList',
    components:{
        MovieItem
    },
  computed: {
    ...Vuex.mapGetters({films:"FilteredMovies"})
  } 
}