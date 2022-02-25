import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
  listName: String,
  listPrivate: Boolean,
  listPassword: String,
  listIdentification: String,
  listContent: {
    type: [String],
    default: []
  }
})

const List = mongoose.models.Lists || mongoose.model("Lists", ListSchema)

export { List }