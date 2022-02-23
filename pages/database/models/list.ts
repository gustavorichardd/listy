import mongoose from 'mongoose';

// OUR TODO SCHEMA
const ListSchema = new mongoose.Schema({
  listName: String,
  listPrivate: Boolean,
  listIdentification: String,
  listPassword: String,
  listContent: [String]
})

const List = mongoose.models.Lists || mongoose.model("Lists", ListSchema)

export { List }