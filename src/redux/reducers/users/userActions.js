import userActiontypes from "./userActiontypes";

const usersLoadStart = () => {
  type: userActiontypes.USERS_LOAD_START;
};
const usersLoadSuccess = (users) => ({
  type: userActiontypes.USERS_LOAD_SUCCESS,
  payload: users,
});
const usersLoadError = (errorMessage) => ({
  type: userActiontypes.USERS_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  usersLoadStart,
  usersLoadSuccess,
  usersLoadError,
};
