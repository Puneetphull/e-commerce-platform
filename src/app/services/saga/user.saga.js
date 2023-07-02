import { takeEvery, call, put, take } from "redux-saga/effects";
import { userConstants } from "../../constants";
import { userService } from "../../api";
import { usersActions } from "../actions";

function* login(users) {
  try {
    const response = yield call(userService.login(users.payload));
    console.log(response);
  } catch (error) {
    yield put(usersActions.LOGIN_FAILURE(error));
  }
}

export function* fetchUser() {
  yield takeEvery(userConstants.LOGIN_REQUEST, login);
}
