import { render, screen } from '@testing-library/react';
import NoCards from './no-cards';
import { CityMapDefault } from '../../const';

describe('Component NoCards', () => {

  it('should render correctly', () => {
    const expectedText = /No places/i;
    const expectedProps = CityMapDefault;

    render(<NoCards city={expectedProps} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

});
