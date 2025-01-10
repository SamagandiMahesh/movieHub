import { render } from '@testing-library/react';

import MovieLayout from './movie-layout';

describe('MovieLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieLayout />);
    expect(baseElement).toBeTruthy();
  });
});
