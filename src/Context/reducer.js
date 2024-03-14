const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CARD":
      return { ...state, card: [] };
    case "REMOVEd":
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload),
      };
    case "CHANGE_QUANTITY": {
      const tempCard = state.card.map((item) => {
        if (item.id === action.payload.id && action.payload.quantity > 0) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        card: tempCard,
      };
    }
    case "GET_TOTALS": {
      let { total, quantity } = state.card.reduce(
        (cardTotal, cardItem) => {
          const { price, quantity } = cardItem;
          const itemTotal = price * quantity;
          cardTotal.total += itemTotal;
          cardTotal.quantity += quantity;
          return cardTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      return {
        ...state,
        total,
        quantity,
      };
    }
  }
};

export default reducer;
