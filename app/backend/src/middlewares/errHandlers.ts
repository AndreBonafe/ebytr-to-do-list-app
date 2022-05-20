import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import Tasks from '../database/models/Task';
import TaskService from '../services';
import ITaskPackage from '../interfaces/ITaskPackage';

export default class ErrorHandler {

  private taskService = new TaskService();

  private checkStatusName(status: string): boolean {
    switch(status) {
      case 'pending':
        return false;
      case 'done':
        return false;
      case 'in-progress':
        return false;
      default:
          return true;
    }
  }

  async validateTaskBody(req: Request, res: Response, next: NextFunction) {
    const taskData: ITaskPackage = req.body;

    if(!taskData) return res.status(400).json({ error: 'You need to send a taskName and a status' });
    if(Object.keys(taskData).length > 2) return res.status(400).json({ error: 'You need to send a taskName and a status' });
    if(!taskData.taskName) return res.status(400).json({ error: 'cannot find the taskName' });
    if(taskData.taskName.length === 0) return res.status(400).json({ error: 'taskName cant be empty' });
    if(!taskData.status) return res.status(400).json({ error: 'cannot find the status' });
    if(taskData.status.length === 0) return res.status(400).json({ error: 'status cant be empty' });
    if(this.checkStatusName(taskData.status)) {
      return res.status(400).json({ error: 'status must be: "pending", "done" or "in-progess"' });
    }

    next();
  }

  async validateId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const allTasks:Tasks[] = await this.taskService.getAll();

    if(!allTasks.some((e) => Number(e.taskId) === Number(id))) {
      return res.status(400).json({ error: 'invalid task id' });
    }

    next();
  }
}