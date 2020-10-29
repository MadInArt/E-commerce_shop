import { all, call } from "redux-saga/effects";

import { onFetchCollectionsStart } from "./shopPage/shopPage.sagas";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
