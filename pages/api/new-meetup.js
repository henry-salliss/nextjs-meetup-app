import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // connect to the database
    const client = await MongoClient.connect(
      "mongodb+srv://testuser:ZQrhMKk9y41MNwTt@cluster0.oyawi.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    // get database and collection of data from database
    const database = client.db();
    const meetupsCollection = database.collection("meetups");
    // insert the request data to database
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    // stop connection to database
    client.close();

    // configure response sent back to client
    res.status(201).json({ message: "meetup inserted" });
  }
};

export default handler;
