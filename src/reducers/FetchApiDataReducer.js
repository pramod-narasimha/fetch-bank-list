const defaultState = {
  isLoading: true,
  bankList: [],
  favList: [],
  postsList: [],
  postDataList: [],
  searchKey: "",
  filteredData: [],
  cityList: []
};

const FetchApiDataReducer = function(state = defaultState, action) {
  const { type, payload } = action;

  const updateState = update => {
    return Object.assign({}, state, update);
  };

  const resetState = () => {
    return Object.assign({}, state, defaultState);
  };
  switch (type) {
    case "IS_LOADING":
      return updateState({ isLoading: payload });
    case "SET_API_DATA":
      return updateState({ bankList: payload });
    case "SET_FAVOURITE_LIST":
      return updateState({ favList: payload });
    case "SET_POST_API_DATA":
      return updateState({ postDataList: payload });
    case "SET_CITY_LIST":
      return updateState({ cityList: payload });
    case "SET_FILTERED_LIST":
      return updateState({ filteredData: payload });
    case "SET_SEARCH_KEY":
      return updateState({ searchKey: payload });
    case "RESET_DATA":
      return resetState();
    default:
      return state;
  }
};
export default FetchApiDataReducer;
