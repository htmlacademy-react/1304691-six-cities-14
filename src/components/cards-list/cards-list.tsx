import Card from '../card/card';
import { Offers } from '../../types/offers';
import { useState } from 'react';

type CardsListProps = {
  offers: Offers;
}

function CardsList({ offers }: CardsListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);

  function handleOfferMouseEnter(id: number) {
    setActiveOffer(id);
  }

  function handleOfferMouseLeave() {
    setActiveOffer(0);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          handleOfferMouseEnter={() => handleOfferMouseEnter(offer.id)}
          handleOfferMouseLeave={handleOfferMouseLeave}
        />)
      )}
    </div>
  );
}

export { CardsList };
