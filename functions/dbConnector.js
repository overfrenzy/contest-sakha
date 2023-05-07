/*
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
  const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET })

  try {
    const response = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('YOUR_FAUNA_COLLECTION'))),
        q.Lambda(x => q.Get(x))
      )
    )

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  }
}

*/