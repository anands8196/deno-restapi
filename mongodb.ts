import { init, MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
const MONGO_URL = `mongodb+srv://anands111:anands111@cluster0-vvebg.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const client = new MongoClient();
console.log(client);
client.connectWithUri(MONGO_URL);
console.log("Connected to MongoDB!");
const db = client.database("deno_test");
export default db;
