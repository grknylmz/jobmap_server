import "dotenv/config";
import App from "./app";
import JobController from "./job/job.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();

const app = new App([new JobController()]);

app.listen();
