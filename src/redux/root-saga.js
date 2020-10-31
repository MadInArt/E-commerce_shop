import { all, call } from "redux-saga/effects";

import { onFetchCollectionsStart } from "./shopPage/shopPage.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSagas)]);
}
