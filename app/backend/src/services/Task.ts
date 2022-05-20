import Tasks from '../database/models/Task';

export default class TaskService {
  taskModel = Tasks;

  async getAll(): Promise<Tasks[]> {
    const result: Tasks[] = await this.taskModel.findAll();

    return result;
  }
}
