import mysql from 'mysql2/promise';

export const dbConfig = {
  host: "localhost",
  db_name: "ensurekar",
  username: "root",
  password: "",
};

let connection: mysql.Connection | null = null;

export const CreateConnection = async (): Promise<mysql.Connection> => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.db_name,
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }
  return connection;
};

