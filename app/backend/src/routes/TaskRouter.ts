import { NextFunction, Router, Request, Response } from 'express';
import ErrorHandler from '../middlewares/errHandlers';
import TaskController from '../controllers';

const TaskRouter = Router();

const tasksController = new TaskController();
const errorHandler = new ErrorHandler();

TaskRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) =>
    tasksController.getAllTasks(req, res, next),
);

TaskRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) =>
  errorHandler.validateTaskBody(req, res, next),
  async (req: Request, res: Response, next: NextFunction) =>
    tasksController.createTask(req, res, next),
);

TaskRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) =>
  errorHandler.validateId(req, res, next),
  async (req: Request, res: Response, next: NextFunction) =>
  errorHandler.validateTaskBody(req, res, next),
  async (req: Request, res: Response, next: NextFunction) =>
    tasksController.editTask(req, res, next),
);

TaskRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) =>
  errorHandler.validateId(req, res, next),
  async (req: Request, res: Response, next: NextFunction) =>
    tasksController.deleteTask(req, res, next),
);


export default TaskRouter;
 