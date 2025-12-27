// import { Pool } from 'pg';

// let pool = null;

// const CreateConnection = async () => {
//   if (!pool) {
//     try {
//       pool = new Pool({
//         connectionString: process.env.DATABASE_URL.replace('prisma+postgres', 'postgres'),
//         ssl: {
//           rejectUnauthorized: false, // Required for prisma accelerate SSL
//         },
//       });

//       // Test the connection
//       const client = await pool.connect();
//       console.log('PostgreSQL connected successfully');
//       client.release();
      
//     } catch (error) {
//       console.error('PostgreSQL connection failed:', errors.message);
//       throw error;
//     }
//   }
//   return pool;
// };

// export default CreateConnection;