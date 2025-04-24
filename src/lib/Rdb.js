
import mysql from 'mysql2/promise';

let connection = null; 
const CreateConnection = async () => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: '192.168.29.65',
        user: 'remote_user',
        password: 'Toss@123456789',
        database: 'ensurekar',
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log(' MySQL connected successfully with remote');
    } catch (error) {
      console.error(' remote MySQL connection failed:', error.message);
      throw error;
    }
  }
  return connection;
};

export default CreateConnection;
