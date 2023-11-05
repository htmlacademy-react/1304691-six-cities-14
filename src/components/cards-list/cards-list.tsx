import Card from '../card/card';
import { Offers } from '../../types/types';
import { useState } from 'react';

type CardsListProps = {
  offers: Offers;
  onListItemHover: (listItemName: number) => void;
  onListItemLeave: () => void;
}

function CardsList({ offers, onListItemHover, onListItemLeave }: CardsListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<null | number>(null);

  function handleOfferMouseEnter(id: number) {
    setActiveOffer(id);
    onListItemHover(id);
  }

  function handleOfferMouseLeave() {
    setActiveOffer(activeOffer);
    onListItemLeave();
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferMouseEnter={() => handleOfferMouseEnter(offer.id)}
          onOfferMouseLeave={handleOfferMouseLeave}
        />)
      )}
    </div>
  );
}

export { CardsList };
