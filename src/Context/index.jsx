import { createContext, useContext, useEffect, useReducer } from "react";

import cardItems from "../data";
import reducer from "./reducer";

const CardContext = createContext();

const initialState = {
  loading: false,
  card: cardItems,
  total: 0,
  amount: 0,
};

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCard = () => {
    dispatch({
      type: "CLEAR_CARD",
    });
  };

  const remove = (id) => {
    dispatch({
      type: "REMOVEd",
      payload: id,
    });
  };

  const changeQuantity = (changeObj) => {
    console.log("changeObj :>> ", changeObj);
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: changeObj,
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTALS",
    });
  }, [state.card]);

  return (
    <CardContext.Provider
      value={{ ...state, clearCard, remove, changeQuantity }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => {
  return useContext(CardContext);
};

export { CardProvider, useCardContext };
