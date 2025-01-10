import styled from 'styled-components';

const StyledMovieList = styled.div`
  color: pink;
`;
export function MovieList() {
  return (
    <StyledMovieList>
      <h1>Welcome to MovieList!</h1>
    </StyledMovieList>
  );
}

export default MovieList;
