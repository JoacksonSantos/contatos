const initialState = [
    {
      id: 0,
      name: "Sarosh",
      number: 1234,
      idade: 43
    },
    {
      id: 1,
      name: "Fatima",
      number: 12345,
      idade: 23
    }
  ];
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "UPDATE_CONTACT":
        const updateState = state.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state = updateState;
        return state;
      default:
        return state;
    }
  };
  
  export default contactReducer;
  