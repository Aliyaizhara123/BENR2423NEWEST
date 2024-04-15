const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello Aya!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})


const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://Aliyaizhara123:Aliyaizhara123@cluster0.02sbm3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    
    let result = await client.db('Databases').collection('Mingyu').deleteOne(  //change here delete,update,create,find
    { _id: new ObjectId('66051562884fb40b8379b741')},
    )
    //{ $set: { 
     // name: 'Aya',
      //age: 3,

    // } }
    //)
     console.log(result)
    
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);

