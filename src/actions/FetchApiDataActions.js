import axios from "axios";
const api = {
  devApi: "http://localhost:3000/apiResponse.json",
  prodApi: "https://pramod-narasimha.github.io/apiResponse.json"
};

export function setApiData(data) {
  return {
    type: "SET_API_DATA",
    payload: data
  };
}

export function setPostApiData(data) {
  return {
    type: "SET_POST_API_DATA",
    payload: data
  };
}

export function setLoading(data) {
  return {
    type: "IS_LOADING",
    payload: data
  };
}

export function setCityList(data) {
  return {
    type: "SET_CITY_LIST",
    payload: data
  };
}

export function setFavouriteList(data) {
  return {
    type: "SET_FAVOURITE_LIST",
    payload: data
  };
}

export function setFilteredDataArray(data) {
  return {
    type: "SET_FILTERED_LIST",
    payload: data
  };
}
export function setSearchKeyData(data) {
  return {
    type: "SET_SEARCH_KEY",
    payload: data
  };
}

export const fetchApiData = data => dispatch => {
  dispatch(setLoading(true));
  const bankListData =
    typeof localStorage.getItem("bankListData") === "undefined"
      ? null
      : JSON.parse(localStorage.getItem("bankListData"));
  let responseCopy = [];
  if (!bankListData) {
    axios.get(api.devApi, data).then(response => {
      responseCopy = [...response.data];
      console.log("response copy", responseCopy);
      responseCopy.forEach((data, key) => {
        data.key = key;
        data.isFavourite = false;
      });
      dispatch(
        setCityList([
          ...new Set(
            responseCopy
              .map(data => {
                return data.city;
              })
              .filter(stringData => !!stringData)
          )
        ])
      );
      localStorage.setItem("bankListData", JSON.stringify(responseCopy));
      dispatch(setApiData(responseCopy));
      dispatch(setLoading(false));
    });
  } else {
    dispatch(
      setCityList([
        ...new Set(
          bankListData
            .map(data => {
              return data.city;
            })
            .filter(stringData => !!stringData)
        )
      ])
    );
    dispatch(
      setFavouriteList(
        bankListData
          .map(data => {
            if (data.isFavourite) {
              return data.key;
            } else {
              return "";
            }
          })
          .filter(numberData => typeof numberData === "number")
      )
    );
    dispatch(setApiData(bankListData));
    dispatch(setLoading(false));
  }
};

export const setFavourite = (id, bankList, type) => dispatch => {
  bankList[id].isFavourite = type;
  dispatch(
    setFavouriteList(
      bankList
        .map(data => {
          if (data.isFavourite) {
            return data.key;
          } else {
            return "";
          }
        })
        .filter(numberData => typeof numberData === "number")
    )
  );
  dispatch(setApiData(bankList));
  localStorage.setItem("bankListData", JSON.stringify(bankList));
};

export const setSearchKey = (searchKey, bankListData) => dispatch => {
  console.log("search key => ", searchKey)
  const filteredData = bankListData.filter(bank => {
    if (
      bank.bank_name.toUpperCase().includes(searchKey.toUpperCase()) ||
      bank.ifsc.toUpperCase().toUpperCase().includes(searchKey.toUpperCase()) ||
      bank.branch.toUpperCase().includes(searchKey.toUpperCase()) ||
      bank.bank_id.toString().toUpperCase().includes(searchKey.toUpperCase()) ||
      bank.address.toUpperCase().includes(searchKey.toUpperCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
  dispatch(setSearchKeyData(setSearchKey));
  dispatch(setFilteredDataArray(filteredData));
};

export const clearSearch = () => dispatch => {
  dispatch(setFilteredDataArray([]));
  dispatch(setSearchKeyData(""));
};
