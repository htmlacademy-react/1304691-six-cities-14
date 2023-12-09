import Card from '../card/card';
import { Offer, OfferPreview } from '../../types/types';
import { memo } from 'react';

type CardsListProps = {
  offers: OfferPreview[];
  isOtherPlaces?: boolean;
  block: string;
  onListItemHover?: (itemId: Offer['id'] | null) => void;
}

function CardsListComponent({ offers, isOtherPlaces, block, onListItemHover }: CardsListProps): JSX.Element {

  return (
    <div className={isOtherPlaces ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'} data-testid="cardsContainer">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          block={block}
          onListItemHover={onListItemHover}
        />)
      )}
    </div>
  );
}

const CardsList = memo(CardsListComponent);

export default CardsList;
