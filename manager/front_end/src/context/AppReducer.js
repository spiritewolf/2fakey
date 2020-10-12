export default (state, action) => {
  switch (action.type) {
    case "RESULT_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_RESULT":
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    case "CREATE_SEARCH":
      return {
        ...state,
        ...action.payload,
        results: action.payload,
        loading: false,
      };
    case "GET_ERRORS":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
