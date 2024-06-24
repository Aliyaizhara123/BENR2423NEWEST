const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://nurmahfuzah03:Mahfuzah03@mahfuzah03.blu6t3a.mongodb.net/?retryWrites=true&w=majority&appName=Mahfuzah03";
 
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected successfully to MongoDB')
   
    // Define the aggregation pipeline
    const pipeline = [
      {
        '$match': {
          'name': 'Leslie Martinez'
        }
      }, {
        '$lookup': {
          'from': 'accounts',
          'localField': 'accounts',
          'foreignField': 'account_id',
          'as': 'account_detail'
        }
      }
    ];
    // Perform the aggregation operation
    const result = await client.db('sample_analytics').collection('customers').aggregate(pipeline).toArray();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);