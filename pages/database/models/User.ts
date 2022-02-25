import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: String,
  userAvatar: String,
  userEmail: String,
  userLists: {
    type: [String],
    default: [],
  },
  // listContent: {
  //   type: [String],
  //   default: []
  // },
  userFavoriteLists: {
    type: [String],
    default: []
  }
})

const User = mongoose.models.Users || mongoose.model("Users", UserSchema)

export { User }