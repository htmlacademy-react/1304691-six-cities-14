import Card from '../card/card';
import { Offers } from '../../types/types';
import { useState } from 'react';

type CardsListProps = {
  offers: Offers;
  isOtherPlaces?: boolean;
  onListItemHover?: (listItemName: number) => void;
  onListItemLeave?: () => void;
}

function CardsList({ offers, isOtherPlaces, onListItemHover, onListItemLeave }: CardsListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<null | number>(null);

  function handleOfferMouseEnter(id: number) {
    setActiveOffer(id);
    if (onListItemHover) {
      onListItemHover(id);
    }
  }

  function handleOfferMouseLeave() {
    setActiveOffer(activeOffer);
    if (onListItemLeave) {
      onListItemLeave();
    }
  }

  return (
    <div className={isOtherPlaces ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferMouseEnter={() => handleOfferMouseEnter?.(offer.id)}
          onOfferMouseLeave={handleOfferMouseLeave}
        />)
      )}
    </div>
  );
}

export { CardsList };
