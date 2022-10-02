
import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    _id: false,
  },
  name: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 20,
  },
  apellido: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 50,
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,

  }
})
const useModel = model("User", userSchema);
export default useModel;