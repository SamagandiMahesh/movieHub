import styled from 'styled-components';
import MovieDetails from '../../molecules/movie-details/movie-details';
import MovieActionBar from '../../molecules/movie-action-bar/movie-action-bar';
import MovieList from '../../molecules/movie-list/movie-list';

const StyledMovieLayout = styled.div`
  color: pink;
`;

const StyledMovieDetails = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`;
export function MovieLayout() {
  return (
    <StyledMovieLayout>
      <MovieActionBar/>
      <StyledMovieDetails>
        <MovieList />
        <MovieDetails />
      </StyledMovieDetails>
    </StyledMovieLayout>
  );
}

export default MovieLayout;
