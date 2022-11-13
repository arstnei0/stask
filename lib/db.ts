import { MongoClient } from "mongodb"

const url = process.env.MONGODB_URL

if (!url) throw new Error("MONGODB_URL is not defined")

const client = new MongoClient(url)

const db = {
	client,
}

export default db
