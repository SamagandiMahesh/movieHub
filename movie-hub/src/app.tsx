import styled from 'styled-components';
import MovieLayout from './organisms/movie-layout/movie-layout';
import Header from './molecules/header/header';
import Footer from './molecules/footer/footer';

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <MovieLayout />
      <Footer />
    </StyledApp>
  );
}

export default App;
