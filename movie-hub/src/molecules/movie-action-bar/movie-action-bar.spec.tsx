import { render } from '@testing-library/react';

import MovieActionBar from './movie-action-bar';

describe('MovieActionBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieActionBar />);
    expect(baseElement).toBeTruthy();
  });
});
