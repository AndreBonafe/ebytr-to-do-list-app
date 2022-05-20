import TaskService from '../services';
import { Request, Response, NextFunction } from 'express';
import ITaskPackage from '../interfaces/ITaskPackage';

export default class TaskController {
  taskService: TaskService = new TaskService();

  async getAllTasks(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.taskService.getAll();

      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }
  
  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks: ITaskPackage = req.body;
      
      const created = await this.taskService.create(tasks);

      return res.status(201).json(created);
    } catch (e) {
      next(e);
    }
  }
}
