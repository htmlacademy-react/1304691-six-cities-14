
import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import { Offer, Offers } from '../../types/types';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';

const URL_MARKER_DEFAULT = '../markup/img/pin.svg';
const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';

type OfferMapProps = {
  offer: Offer;
  offers: Offers;
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

function OfferMap({ offer, offers }: OfferMapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap({ mapRef, city: offer.city });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((item) => {
        const marker = new Marker({
          lat: item.location.latitude,
          lng: item.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });

      const markerCurrent = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      });

      markerCurrent
        .setIcon(currentCustomIcon)
        .addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, offer.location]);

  return (
    <section className='offer__map map'
      ref={mapRef}
    >
    </section>
  );
}

export default OfferMap;
