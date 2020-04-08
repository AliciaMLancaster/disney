import { PARKS } from '../shared/parks';
import { REVIEWS } from '../shared/reviews';

export const initialState = {
  parks: PARKS,
  reviews: REVIEWS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
