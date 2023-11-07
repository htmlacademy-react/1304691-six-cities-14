
import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import { Offer, Offers } from '../../types/types';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT } from '../../const';

type OfferMapProps = {
  offer: Offer;
  offersAroundHere: Offers;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function OfferMap({ offer, offersAroundHere }: OfferMapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap({ mapRef, city: offer.city});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersAroundHere.forEach((item) => {
        const marker = new Marker({
          lat: item.location.latitude,
          lng: item.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersAroundHere]);
  return (
    <div
      style={{ height: '579px' }}
      ref={mapRef}
    >
    </div>
  );
}

export default OfferMap;
