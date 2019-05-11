import * as mongoose from "mongoose";
import Job from "./job.interface";

const jobSchema = new mongoose.Schema({
  search: String,
  country: String,
  count: Number,
  date: String
});

const jobModel = mongoose.model<Job & mongoose.Document>("Job", jobSchema);

export default jobModel;
