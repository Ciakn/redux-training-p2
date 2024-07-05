const initialState = {
  numOfCakes: 10,
};
export default function cakeReducer(state = initialState, aciton) {
  switch (aciton.type) {
    case "BUY_CAKE": {
      return {
        ...state,
        numOfCakes: state.numOfCakes - aciton.value,
      };
    }

    default:
      return state;
  }
}
