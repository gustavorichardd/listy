import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  itemName: String,
  itemQuanty: Number
})

const Item = mongoose.models.Items || mongoose.model("Items", ItemSchema)

export { Item }