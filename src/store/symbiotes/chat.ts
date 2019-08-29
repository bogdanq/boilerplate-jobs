import { createSymbiote } from "redux-symbiote";

const initialState = {
  isLoading: false,
};

const symbiotes = {};

export const { actions, reducer: chatReducer } = createSymbiote(
  initialState,
  symbiotes,
  "chatReducer",
);
