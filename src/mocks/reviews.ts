import { Reviews } from '../types/types';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sun Oct 29 2023 15:06:43 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Max'
    }
  },
  {
    comment: 'The presence of a water park, which you can go down from your room in bathrobes, Japanese heated toilets, the registration itself is top',
    date: 'Sun Oct 29 2023 15:06:43 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Jhon'
    }
  },
  {
    comment: 'Excellent location - very center Good sound insulation Amazing view from the window Cleanliness Excellent breakfast Polite staff',
    date: 'Sun Oct 29 2023 15:06:43 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Steve'
    }
  }
  , {
    comment: 'I didn’t like the breakfast, the meat either had to be looked for or it wasn’t there at all. We don’t eat sausages at all, and we don’t eat sausage either.',
    date: 'Sun Oct 29 2023 15:06:43 GMT+0300 (Москва, стандартное время)',
    id: 4,
    rating: 2,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Oliver'
    }
  },
  {
    comment: 'I really didn’t like how time flies so damn fast. And I really didn’t like the approach of working days!',
    date: 'Sun Oct 29 2023 15:06:43 GMT+0300 (Москва, стандартное время)',
    id: 5,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Karl'
    }
  }
];

export { reviews };
