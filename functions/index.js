const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const env = functions.config();

const client = algoliasearch(env.algolia.app_id, env.algolia.admin_api_key);
const index = client.initIndex("collections");

const onProductCreated = functions.firestore
  .document("collections")
  .onCreate((snap, ctx) => {
    return index.saveObject({
      objectID: snap.id,
      ...snap.data(),
    });
  });
const onProductDeleted = functions.firestore
  .document("collections/:collectionId")
  .onDelete((snap, ctx) => {
    return index.deleteObject(snap.id);
  });

module.exports = {
  onProductDeleted,
  onProductCreated,
};
