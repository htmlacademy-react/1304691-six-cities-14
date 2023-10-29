import Card from '../card/card';
import { Offer as OfferType } from '../../types/offers';
import { useState } from 'react';

type CardsListProps = {
  cardCount: number;
  offers: OfferType[];
}

function CardsList({ cardCount, offers }: CardsListProps): JSX.Element {
  const cards: JSX.Element[] = [];

  const [activeOffer, setActiveOffer] = useState(offers[0]);

  function handleChange(evt: React.BaseSyntheticEvent) {
    if (evt.target.tagName !== 'ARTICLE') {
      return;
    }

    const offerTarget = offers.find((offer) => offer.id === +evt.target.dataset.id);

    setActiveOffer(offerTarget);
  }

  for (let i = 0; i < cardCount; i++) {
    cards.push(<Card offerInfo={offers[i]} onMouseOver={handleChange} />);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {...cards}
    </div>
  );
}

export { CardsList };
