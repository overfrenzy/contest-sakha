import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await query('SELECT * FROM Participant');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
