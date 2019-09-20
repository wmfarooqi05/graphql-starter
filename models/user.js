import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  age: { type: Number, },
  gender: { type: String },
  items: [{ 
    ref: 'item',
    type: mongoose.Schema.Types.ObjectId,
    required: true
 }],
});

export default mongoose.model('user', UserSchema);