import { NextFunction, Router, Request, Response } from 'express';
import TaskController from '../controllers';

const TaskRouter = Router();

const tasksController = new TaskController();

TaskRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) =>
    tasksController.getAllTasks(req, res, next),
);

export default TaskRouter;
 