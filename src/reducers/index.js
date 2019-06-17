import { INCREMENT, DECREMENT, INCREMENT_IF_ODD } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    return {...state, count: state.count + 1}
    case DECREMENT:
    // Fill in the body of this case
      return {...state, count: state.count - 1}
    case INCREMENT_IF_ODD:
      return state.count % 2 === 1 
      ? { ...state, count: state.count + 1 }
      : state;
    default:
      return state;
  }
};
