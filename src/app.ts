// const express = require("express"); //this is the actual Node import syntax
import express, { Request, Response, NextFunction } from "express"; //after installing the Node/Express Types, module imports work with TS support
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

app.use(json()); //extracts the body of all incoming requests and parses any json it finds

app.use("/todos", todoRoutes);

// app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {}); //alternate to importing
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
