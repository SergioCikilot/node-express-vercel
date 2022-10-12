import { NextFunction, Request, Response, Router } from "express";

import express from "express";
var router = express.Router();

router.get("/", async (request: Request, response: Response) => {
  try {
    response.send("hello").status(200).end;
  } catch (error) {
    response.status(400).end;
  }
});

export default router;
