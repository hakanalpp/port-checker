import { CronJob } from "cron";
import { createRequire } from "module";

import { sendMail } from "./services/mailService.js";
import { checkServiceAvailability } from "./services/requestService.js";

const require = createRequire(import.meta.url); // for having ES Modules in NODE >= 14 https://stackoverflow.com/a/63156878/11107343
require("dotenv").config();

const checkJob = new CronJob("0 0 */2 * * *", async function check() {
  const res = await checkServiceAvailability();
  if (res !== process.env.FAILURE_TEXT) await sendMail(res);
});

const controlJob = new CronJob("0 0 0 * * *", async function control() {
  await sendMail("Code is still working!");
});

checkJob.start();
controlJob.start();
