import mysql from 'mysql2/promise';

export const dbConfig = {
  host: "localhost",
  db_name: "ensurekar",
  username: "root",
  password: "",
};

let pool: mysql.Pool | null = null;

export const CreateConnection = async (): Promise<mysql.Pool> => {
  if (!pool) {
    try {
      pool = mysql.createPool({
        host: dbConfig.host,
        user: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.db_name,
        port: 3306,
        waitForConnections: true,
        connectionLimit: 20, // Increased for better concurrency
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
      });
      console.log('Database pool created successfully');
    } catch (error) {
      console.error('Error creating database pool:', error);
      throw error;
    }
  }
  return pool;
};

