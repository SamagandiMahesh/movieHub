import { render } from '@testing-library/react';

import SortDropdown from './sort-dropdown';

describe('SortDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SortDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
