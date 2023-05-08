import { Pool } from 'pg';

export default function Db({ isConnected }) {
  return (
    <div>
      <h1>Database Connection Status</h1>
      {isConnected ? (
        <p>The connection to the database is successful.</p>
      ) : (
        <p>The connection to the database has failed.</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const pool = new Pool({
    connectionString: process.env.COCKROACHDB_URL,
    ssl: {rejectUnauthorized: false,},
  });

  try {
    const client = await pool.connect();
    client.release();
    return { props: { isConnected: true } };
  } catch (error) {
    return { props: { isConnected: false } };
  }
}
//test version 2 because version 1 is empty because db is empty