import sqlite3 from "sqlite3";
let db = null;
const getDatabase = () => {
  if (!db) {
    db = new sqlite3.Database("data/db.sqlite", (err) => {
      if (err) {
        console.error("Failed to connect to the database:", err);
        throw err;
      }
      console.log("Database connected.");
    });
  }
  return db;
};
const handle = async ({ event, resolve }) => {
  event.locals.db = getDatabase();
  const response = await resolve(event);
  return response;
};
export {
  handle
};
