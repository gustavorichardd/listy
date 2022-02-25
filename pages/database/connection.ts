//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

import { List } from "./models/list"
import { User } from "./models/User"
// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))

  return { conn, List, User }
}