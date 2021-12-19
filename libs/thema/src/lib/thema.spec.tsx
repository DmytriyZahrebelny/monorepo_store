import { render } from '@testing-library/react';

import Thema from './thema';

describe('Thema', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Thema />);
    expect(baseElement).toBeTruthy();
  });
});
