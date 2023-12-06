import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../utils/with-history';

describe('Component Logo', () => {

  it('should render correctly', () => {
    const expectedAltText = '6 cities logo';
    const preparedComponent = withHistory(<Logo />);

    render(preparedComponent);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });

});
