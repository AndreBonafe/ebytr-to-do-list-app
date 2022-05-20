import TaskService from '../services';
import { Request, Response, NextFunction } from 'express';

export default class TaskController {
  taskService: TaskService = new TaskService();

  async getAllTasks(_req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const result = await this.taskService.getAll();

      return res.status(200).json(result);
    } catch (e) {
      console.error(e);
      next(e);
    }
  } 
}
