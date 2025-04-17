import mysql from 'mysql2/promise';

let Connection;

// use .env file

/**
 * host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
 */

// const CreateConnection = async () => {
//     if (!Connection) {
//         try {
//             Connection = await mysql.createConnection({
//                 host: 'localhost',
//                 user: 'root',
//                 password: '1234',
//                 database: 'ensurekar',
//                 port: '3306',
//                 waitForConnections: true,
//                 connectionLimit: 10,
//                 queueLimit: 0,
//             });
//             console.log('Database connected successfully');
//         } catch (error) {
//             console.error('Error connecting to the database:', error);
//         }
//     }
//     return Connection;
// }


// export default CreateConnection;


const CreateConnection = async () => {
    if (!Connection) {
        try {
            Connection = await mysql.createConnection({
                host: 'sql12.freesqldatabase.com',
                user: 'sql12773599',
                password: '8JBR6UY2EQ',
                database: 'sql12773599',
                port: '3306',
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0,
            });
            console.log('Database connected successfully');
        } catch (error) {
            console.error('Error connecting to the database:', error);
        }
    }
    return Connection;
}


export default CreateConnection;