import mysql from 'mysql2/promise';

let connection = null;
const CreateConnection = async () => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'ensurekar',
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log(' MySQL connected successfully');
    } catch (error) {
      console.error(' MySQL connection failed:', error.message);
      throw error;
    }
  }
  return connection;
};

export default CreateConnection;
