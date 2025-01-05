import type { Handle } from '@sveltejs/kit';

import sqlite3 from 'sqlite3';

let db: sqlite3.Database | null = null;

const getDatabase = (): sqlite3.Database => {
  if (!db) {
    db = new sqlite3.Database('static/db.sqlite', (err) => {
      if (err) {
        console.error('Failed to connect to the database:', err);
        throw err;
      }
      console.log('Database connected.');
    });
  }
  return db;
};

export const handle: Handle = async ({ event, resolve }) => {

  event.locals.db = getDatabase();

  const response = await resolve(event);
  return response;
};
