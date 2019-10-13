import * as express from "express";
import Controller from "../interfaces/controller.interface";
import jobModel from "./job.model";

class JobController implements Controller {
  public path = "/jobs";
  public router = express.Router();
  private job = jobModel;

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(this.path, this.getAllJobs);
  }

  private getAllJobs = async (
    request: express.Request,
    response: express.Response
  ) => {
    //Get the jobs in DB
    const jobs = await this.job.find();
    //Then try to scrape websites from other coutries

    response.send(jobs);
  };
}

export default JobController;
