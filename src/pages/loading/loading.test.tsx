import { render, screen } from '@testing-library/react';
import Loading from './loading';

describe('Component Loading', () => {

  it('should render correctly', () => {
    const expectedText = /Loading/i;

    render(<Loading />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

});
