const authReducer: any = (state: any = {}, action: any) => {
  switch (action.type) {
    case "SETUSER":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    case "LOGOUT":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default authReducer;
