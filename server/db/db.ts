//Testing the import on the backend. I tried require but gave me a TS error
import { Sequelize } from 'sequelize';
let config;

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false
  }
}
export const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/amplify`,
  config
);
