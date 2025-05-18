/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
  const collection = db.collection("subscriptions");

  // Create a unique index on the email and city fields
  await collection.createIndex(
    { email: 1, city: 1 },
    { unique: true, name: "email_city_unique_index" }
  );
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
  // Delete an index to roll back the migration
  const collection = db.collection("subscriptions");
  await collection.dropIndex("email_city_unique_index");
};
