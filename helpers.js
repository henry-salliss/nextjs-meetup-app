import { MongoClient } from "mongodb";

export const getMeetupCollection = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://testuser:ZQrhMKk9y41MNwTt@cluster0.oyawi.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  // get database and collection of data from database
  const database = client.db();
  const meetupsCollection = database.collection("meetups");

  return meetupsCollection;
};
