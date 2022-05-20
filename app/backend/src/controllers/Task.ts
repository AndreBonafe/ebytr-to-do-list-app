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

  async editTask(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks: ITaskPackage = req.body
      const { id } = req.params;

      await this.taskService.edit(Number(id), tasks);

      return res.status(200).json({ message: `task #${id} successfully updated` })
    } catch (e) {
      console.log(e)
      next(e);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      await this.taskService.delete(Number(id));

      return res.status(204).end();
    } catch (e) {
      next(e);
    }
  }
}
