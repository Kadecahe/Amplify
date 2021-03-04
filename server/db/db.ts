//Testing the import on the backend. I tried require but gave me a TS error
import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/amplify`,
  {
    logging: false,
  }
);
