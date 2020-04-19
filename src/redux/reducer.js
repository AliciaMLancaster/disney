import { PARKS } from '../shared/parks';
import { REVIEWS } from '../shared/reviews';

const initialState = {
  parks: PARKS,
  reviews: REVIEWS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
