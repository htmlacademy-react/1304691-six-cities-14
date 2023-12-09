
import { render, screen } from '@testing-library/react';
import { fakeOffers } from '../../utils/mocks';
import { CITY_MAP_DEFAULT } from '../../const';
import Map from './map';

describe('Component Map', () => {

  it('should render correctly', () => {
    const mapTestId = 'mapContainer';
    const activeCity = CITY_MAP_DEFAULT;

    render(<Map block={'cities'} offers={fakeOffers} location={activeCity.location} selectedPointId={fakeOffers[0].id} />);

    const map = screen.getByTestId(mapTestId);
    expect(map).toBeInTheDocument();
  });

});
