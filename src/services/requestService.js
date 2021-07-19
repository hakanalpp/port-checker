import fetch from "node-fetch";

import { getDate } from "../helpers/dateHelper.js";

export const checkServiceAvailability = async () => {
  console.log(`Checking Service Availibiliy.`);
  try {
    const response = await fetch(process.env.REQUEST_URL, {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        Accept: "/",
        "Accept-Language": "en-US,en;q=0.5",
        "X-NewRelic-ID": "VQECVFJTARABXFlUBAgDU1E=",
        "Content-Type": "application/json",
        Token: process.env.REQUEST_TOKEN,
        Pragma: "no-cache",
        "Cache-Control": "no-cache"
      },
      referrer: process.env.REQUEST_REFERER,
      body: '{"Key":"BBK","Value":"60396018"}',
      method: "PUT",
      mode: "cors"
    });
    const res = await response.json();
    return res.ServiceResult.Message;
  } catch (err) {
    console.log(`${err}`);
    return err.message;
  }
};
