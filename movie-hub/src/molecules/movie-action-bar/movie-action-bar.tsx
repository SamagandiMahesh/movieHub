import styled from 'styled-components';
import SortDropdown from '../sort-dropdown/sort-dropdown';
import SearchInput from '../search-input/search-input';

const StyledMovieActionBar = styled.div`
  color: pink;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
export function MovieActionBar() {
  return (
    <StyledMovieActionBar>
      <SortDropdown />
      <SearchInput />
    </StyledMovieActionBar>
  );
}

export default MovieActionBar;
