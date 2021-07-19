import { CronJob } from "cron";
import { createRequire } from "module";

import { sendMail } from "./services/mailService.js";
import { checkServiceAvailability } from "./services/requestService.js";

const require = createRequire(import.meta.url); // for having ES Modules in NODE >= 14 https://stackoverflow.com/a/63156878/11107343
require("dotenv").config();

const checkJob = new CronJob("0 0 6,8,10,12,14,16 * * 1,2,3,4,5", async function check() {
  // Works between 06:00 to 16:00 every 2 hour every weekdays
  const res = await checkServiceAvailability();
  if (res !== process.env.FAILURE_TEXT) await sendMail(res);
});

const controlJob = new CronJob("0 0 0 * * 1", async function control() {
  // Works at 00:00 once in every week.
  const res = await checkServiceAvailability();
  await sendMail(`Code is still working! Here is the message: ${res}`);
});

checkJob.start();
controlJob.start();

async function startFunction() {
  await sendMail(`Code started working!`);
}

startFunction();
