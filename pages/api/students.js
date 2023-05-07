import faunadb from 'faunadb';

const { Client, query } = faunadb;
const { Map, Lambda, Get, Match, Index } = query;

export default async function handler(req, res) {
  const faunaClient = new Client({ secret: process.env.FAUNADB_SECRET });

  try {
    const studentsData = await faunaClient.query(
      Map(
        Match(Index('your_students_index')),
        Lambda('X', Get('X'))
      )
    );

    res.status(200).json(studentsData.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
}
