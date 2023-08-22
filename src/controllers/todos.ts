// import { Request, Response, NextFunction } from "express";

// export const createTodo = (req: Request, res: Response, next: NextFunction) => {}; //long form, cumbersome

import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = []; //storing TODOS only in memory for this exercise

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
};