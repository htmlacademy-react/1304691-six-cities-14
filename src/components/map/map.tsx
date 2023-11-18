import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import { Offers, Offer as OfferType } from '../../types/types';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { useAppSelector } from '../../hooks';

const URL_MARKER_DEFAULT = '../markup/img/pin.svg';
const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';

type MapProps = {
  offers: Offers;
  selectedPointId?: OfferType['id'] | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, selectedPointId }: MapProps): JSX.Element {
  const city = useAppSelector((state) => state.activeCity);

  const mapRef = useRef(null);

  const map = useMap({ mapRef, city });

  const selectedPoint = offers.find((offer) => offer.id === selectedPointId);

  useEffect(() => {
    if (map) {

      if (selectedPoint) {
        const mapLating = {
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude
        };

        const mapZoom = selectedPoint.location.zoom;

        map.setView(mapLating, mapZoom);
      }

      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className='cities__map map'
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
