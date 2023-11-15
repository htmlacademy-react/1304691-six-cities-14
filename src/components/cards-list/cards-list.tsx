import Card from '../card/card';
import { Offers, Offer } from '../../types/types';

type CardsListProps = {
  offers: Offers;
  isOtherPlaces?: boolean;
  block: string;
  onListItemHover?: (itemId: Offer['id'] | null) => void;
}

function CardsList({ offers, isOtherPlaces, block, onListItemHover }: CardsListProps): JSX.Element {

  return (
    <div className={isOtherPlaces ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
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

export { CardsList };
