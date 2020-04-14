import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTrackes = (dispatch) => () => {};
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTrackes, createTrack },
  []
);
