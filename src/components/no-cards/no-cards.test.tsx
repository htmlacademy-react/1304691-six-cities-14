import { render, screen } from '@testing-library/react';
import NoCards from './no-cards';
import { CITY_MAP_DEFAULT } from '../../const';

describe('Component NoCards', () => {

  it('should render correctly', () => {
    const expectedText = /No places/i;
    const expectedProps = CITY_MAP_DEFAULT;

    render(<NoCards city={expectedProps} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

});
