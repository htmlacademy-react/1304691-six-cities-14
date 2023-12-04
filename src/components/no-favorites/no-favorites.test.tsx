import { render, screen } from '@testing-library/react';
import NoFavorites from './no-favorites';

describe('Component NoFavorites', () => {

  it('should render correctly', () => {
    const expectedText = /Nothing yet saved/i;

    render(<NoFavorites />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

});
